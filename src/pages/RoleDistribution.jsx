import { useEffect, useState } from "react";
import Header from "../components/Header";
import api from "../services/api";
import "../styles/roleDistribution.css";

export default function RoleDistribution() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await api.get("/users/listar");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao obter usuários:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handleRoleChange = (userId, newRole) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
  };

  const savePermissions = async () => {
    try {
      await Promise.all(
        users.map((user) =>
          api.patch(`/users/admin/${user.id}`, { role: user.role })
        )
      );
      console.log("Permissões salvas com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar permissões:", error);
    }
  };

  return (
    <>
      <>
        <Header />
        <div className="containerTable">
          <div className="tableHeader">
            <h1>Permissões dos Usuários</h1>
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
                    <div className="slide-radio">
                      <input
                        type="radio"
                        id={`admin-${user.id}`}
                        name={`role-${user.id}`}
                        value="admin"
                        checked={user.role === "admin"}
                        onChange={() => handleRoleChange(user.id, "admin")}
                      />
                      <label htmlFor={`admin-${user.id}`}>Administrador</label>
                      <input
                        type="radio"
                        id={`user-${user.id}`}
                        name={`role-${user.id}`}
                        value="user"
                        checked={user.role === "user"}
                        onChange={() => handleRoleChange(user.id, "user")}
                      />
                      <label htmlFor={`user-${user.id}`}>Usuário</label>
                      <div className="slide" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          style={{ position: "fixed", top: "90%", left: "90%" }}
          className="btnSend"
          onClick={savePermissions}
        >
          Salvar Permissões
        </button>
      </>
    </>
  );
}
