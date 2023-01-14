import { Link } from 'react-router-dom';
import  TextInput  from '../components/Input/input';
import ButtonSample  from '../components/Button/button';
import '../styles/login.css';

export default function Login() {
  return (
    <div className='containerLogin'>
      <div className='loginLeft'> 
        <div className='loginLeftContent'>
          <h3>Gerencie seu condominío de maneira simples, rápida e intuitiva!</h3>
          <p>Com o Condomínio Online você tem acesso a todas as informações do seu condomínio, como: </p>
          <div className='loginLeftList'>
            
            <ul className='loginLeftListFirst'>
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

            <ul className='loginLeftListSecond'>
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

      <div className='loginRight' >
        <form className='loginForm'>
          <h3>Entrar</h3>
          <TextInput id="outlined-required" label="E-mail" type='text' />
          <TextInput id="outlined-password-input" label="Senha" type="password" />
          <span className='loginForgot'>
            Esqueceu a senha?
            <Link to="/"> 
            Clique aqui!
            </Link> 
            </span>
            <ButtonSample name='Entrar' type='submit' />
        </form>
      </div>
    </div>
  );
}
