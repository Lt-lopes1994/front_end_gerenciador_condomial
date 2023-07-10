import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Header from "../components/Header";
import api from "../services/api";
import "../styles/roleDistribution.css";

export default function RoleDistribution() {
  const { control, handleSubmit, getValues, register } = useForm();
  const [initialValues, setInitialValues] = useState({});
  const [users, setUsers] = useState([]);

  async function submit(data) {
    const changedFields = {};
    let userId = null;

    for (const fieldName in data) {
      if (fieldName.startsWith("role-")) {
        const id = fieldName.replace("role-", "");
        const roleId = data[fieldName];
        userId = data[`id-${id}`];
        changedFields[userId] = roleId;
      }
    }

    if (userId && Object.keys(changedFields).length > 0) {
      const response = await api.patch(`/users/admin/${userId}`, changedFields);
      console.log(response.data);
      window.location.reload();
    }
  }

  const options = [
    { value: "admin", label: "admin" },
    { value: "user", label: "user" }
  ];

  async function getUsers() {
    const response = await api.get("/users/listar");
    console.log(response.data);
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const initialValuesObj = {};
      users.forEach((user) => {
        initialValuesObj[`${user.id}`] = user.role;
      });
      setInitialValues(initialValuesObj);
    }
  }, [users]);

  return (
    <>
      <>
        <Header />
        <div className="containerTable">
          <div className="tableHeader">
            <h1>Permissões dos Usuarios</h1>
            <p>Altere as permissões dos usuários cadastrados no sistema:</p>
          </div>
          <table className="permissionUserTable">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Função</th>
                <th>Nova função:</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>

                  <td>
                    <form onSubmit={handleSubmit(submit)}>
                      <Controller
                        name={`role-${user.id}`}
                        control={control}
                        defaultValue={user.role}
                        render={({ field }) => (
                          <Select {...field} options={options} />
                        )}
                      />

                      <input
                        type="hidden"
                        name={`id-${user.id}`}
                        defaultValue={user.id}
                        {...register(`id-${user.id}`)}
                      />

                      <button className="btnSend" type="submit">
                        Alterar
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
}
