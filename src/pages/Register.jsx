/* eslint-disable jsx-a11y/aria-role */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useState } from "react";
import Alert from "../components/Alert/index.jsx";

export default function Register() {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    severity: ""
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setAlert(true);
      setAlertMessage({
        message: "As senhas não coincidem",
        severity: "error"
      });
    }
    console.log(data);
    if (data.password === data.confirmPassword) {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="contentLeft">
        <h1>Olá, seja bem-vindo!</h1>
        <p>
          Para acessar a plataforma, faça seu cadastro com seu e-mail e senha e
          aproveite as facilidades do nosso App.
        </p>
        <p>
          Caso você já tenha cadastro, basta fazer o login. clicando no botão
          abaixo.
        </p>
        <button type="button" onClick={() => navigate("/")}>
          Já tenho uma conta
        </button>
      </div>

      <div className="contentRight">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nome"
            {...register("name", { required: "Nome é um campo obrigátorio" })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p style={{ color: "red" }} role="alert">
              {errors.name?.message}
            </p>
          )}
          <input
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: "E-mail é um cmpao obrigátorio"
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p style={{ color: "red" }} role="alert">
              {errors.email?.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Senha"
            {...register("password", {
              required: "Senha é um campo obrigátorio"
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <p style={{ color: "red" }} role="alert">
              {errors.password?.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmPassword", {
              required: "Confirmar senha é um campo obrigátorio"
            })}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }} role="alert">
              {errors.confirmPassword?.message}
            </p>
          )}
          <button type="submit">Cadastrar</button>
        </form>
        {alert && (
          <Alert
            setOpen={setAlert}
            open={alert}
            message={alertMessage.message}
            severity={alertMessage.severity}
          />
        )}
      </div>
    </div>
  );
}
