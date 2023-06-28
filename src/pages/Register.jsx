/* eslint-disable jsx-a11y/aria-role */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useState } from "react";
import Alert from "../components/Alert/index.jsx";
import api from "../services/api";

export default function Register() {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    severity: ""
  });
  const [loading, setLoading] = useState(false);
  const [concluded, setConcluded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password.length < 8) {
      setAlert(true);
      setAlertMessage({
        message: "A senha deve conter no mínimo 8 caracteres",
        severity: "warning"
      });
    }

    if (data.password !== data.confirmPassword) {
      setAlert(true);
      setAlertMessage({
        message: "As senhas não coincidem",
        severity: "error"
      });
    }

    const onlyNumbers = new RegExp("^[0-9]+$");

    if (!onlyNumbers.test(data.door)) {
      setAlert(true);
      setAlertMessage({
        message: "O campo N° da porta só aceita números",
        severity: "warning"
      });
    }

    if (data.door.length > 4) {
      setAlert(true);
      setAlertMessage({
        message: "O campo N° da porta só aceita no máximo 4 números",
        severity: "warning"
      });
    }

    try {
      const sendData = {
        name: data.name,
        email: data.email,
        password: data.password,
        passwordConfirm: data.confirmPassword,
        door: data.door,
        tower: data.tower
      };

      setLoading(true);

      api.post("/users", sendData).then((response) => {
        setLoading(false);
        setConcluded(true);
      });
    } catch (error) {
      setAlert(true);
      setAlertMessage({
        message: { error },
        severity: "error"
      });
    }
  };

  return (
    <>
      {concluded ? (
        <div className="container">
          <div className="concluded">
            <div className="concludedContent">
              <h1>Cadastro concluído com sucesso!</h1>
              <p>
                Para acessar a plataforma, faça seu login com seu e-mail e senha
                e aproveite as facilidades do nosso App.
              </p>
              <button
                type="button"
                className="buttonBase"
                onClick={() => navigate("/")}
              >
                Fazer login
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="contentLeft">
            <h1>Olá, seja bem-vindo!</h1>
            <p>
              Para acessar a plataforma, faça seu cadastro com seu e-mail e
              senha e aproveite as facilidades do nosso App.
            </p>
            <p>
              Caso você já tenha cadastro, basta fazer o login. clicando no
              botão abaixo.
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
                {...register("name", {
                  required: "Nome é um campo obrigátorio"
                })}
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
                  required: "E-mail é um campo obrigátorio"
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p style={{ color: "red" }} role="alert">
                  {errors.email?.message}
                </p>
              )}
              <input
                type="text"
                placeholder="N° da porta"
                {...register("door", {
                  required: "N° da porta é um campo obrigátorio"
                })}
                aria-invalid={errors.door ? "true" : "false"}
              />
              {errors.door && (
                <p style={{ color: "red" }} role="alert">
                  {errors.door?.message}
                </p>
              )}
              <input
                type="text"
                placeholder="Torre"
                {...register("tower", {
                  required: "Torre é um campo obrigátorio"
                })}
                aria-invalid={errors.tower ? "true" : "false"}
              />
              {errors.tower && (
                <p style={{ color: "red" }} role="alert">
                  {errors.tower?.message}
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
                top={"63rem"}
                bottom={"0"}
                left={"113rem"}
                right={"20rem"}
                setOpen={setAlert}
                open={alert}
                message={alertMessage.message}
                severity={alertMessage.severity}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
