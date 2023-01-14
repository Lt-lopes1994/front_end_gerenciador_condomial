import React from 'react';
import '../styles/login.css';

export default function Login() {
  return (
    <div className='containerLogin'>
      <div className='loginLeft'> 
        <div className='loginLeftContent'>
          <h3>Gerencie seu condominío de maneira simples, rápida e intuitiva!</h3>
        </div>
      </div>

      <div className='loginRight' >
        <form className='loginForm'>
          <h3>Entrar</h3>
        </form>
      </div>
    </div>
  );
}
