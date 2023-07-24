import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ButtonSample from "../components/Button/button.jsx";
import TextInput from "../components/Input/input.jsx";
import api from "../services/api";
import "../styles/login.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  console.log(watch("email"));

  const onSubmit = async (data) => {
    try {
      const sendData = {
        username: data.email,
        password: data.password
      };

      const response = await api.post("/users/login", sendData);
      localStorage.setItem("token", response.data.access_token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerLogin">
      <div className="loginRight">
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="title">Login</h3>
          <label htmlFor="email" className="label-input ">Email</label>
          <TextInput
            name="email"
            id="outlined-email-required"
            label="E-mail"
            type="text"
            register={register}
          />
          <label htmlFor="password" className="label-input ">Password</label>
          <TextInput
            name={"password"}
            id="outlined-password-input"
            label="Senha"
            type="password"
            register={register}
          />
          <Link to="/esqueceusenha"><span className="loginForgot">
            Esqueceu a senha?
          </span></Link>
          <Link to="/registro"><span className="loginForgot">
            Novo no APP?
          </span></Link>
          <ButtonSample name="Entrar" type="submit" />
        </form>
      </div>
      <div className="loginLeft">
        <div className="loginLeftContent">
          <h3>
            Gerencie seu condominío de maneira simples, rápida e intuitiva!
          </h3>
          <p>
            Com o Condomínio Online você tem acesso a todas as informações do
            seu condomínio, como:{" "}
          </p>
          <div className="loginLeftList">
            <ul className="loginLeftListFirst">
              <li>Controle de acesso</li>
              <li>Controle de pagamentos</li>
              <li>Controle de visitantes</li>
              <li>Controle de veículos</li>
              <li>Controle de funcionários</li>
              <li>Controle de moradores</li>
              <li>Controle de prestadores de serviço</li>
              <li>Controle de animais</li>
              <li>Controle de encomendas</li>
              <li>Controle de documentos</li>
            </ul>

            <ul className="loginLeftListSecond">
              <li>Controle de reservas</li>
              <li>Controle de ocorrências</li>
              <li>Controle de reuniões</li>
              <li>Controle de eventos</li>
              <li>Controle de enquetes</li>
              <li>Controle de notícias</li>
              <li>Controle de anúncios</li>
              <li>Controle de reclamações</li>
              <li>Controle de sugestões</li>
              <li>Controle de contas a pagar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
