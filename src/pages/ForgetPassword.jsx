import { useState } from 'react';
import VerificationInput from "react-verification-input";
import api from "../services/api";

import '../styles/forgetpassword.css';


export default function ForgetPassword() {
  const [tokenSenha, setTokenSenha] = useState(false);

  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const valorInput = event.target.value;
    setEmail(valorInput);
  };

  const [tokenNumber, setTokenNumber] = useState('');

  async function handelForget() {
    try {
      const response = await api.post('redefinir-senha', {
        email
      });
      setTokenSenha(true);
    } catch (error) {
      console.log(error)
    }
  }

  console.log(email)
  return (
    <div className="containerPassword">
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
      <div className="forgetPassword">
        <div className="boxSenha">
          {tokenSenha ?
            <>
              <div className="title-token">
                <strong>Authy Verification</strong>
                <span>Copy the verification code in your authy application to verify this account recovery</span>
              </div>
              <div className="token-input">
                <VerificationInput
                  classNames={{
                    container: "tkn-container",
                    character: "character",
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                  }}
                  value={tokenNumber}
                  onChange={(value) => setTokenNumber(value)}
                />
              </div>
              <button className="buttonForget"> Enviar</button>
            </>
            :
            <>
              <div className="text">
                <strong>Esqueceu sua senha</strong>
                <span>Digite seu e-mail e enviaremos um link para redefinir sua Senha</span>
                <label htmlFor="email" className="label-input-forget">Email</label>
              </div>
              <input
                className='inputForget'
                type="text"
                placeholder="E-mail"
                name='email'
                value={email}
                onChange={(event) => handleChange(event)}
              />
              <button className="buttonForget" onClick={() => handelForget()}> Enviar</button>
            </>
          }
        </div>
      </div>
    </div>
  )
}