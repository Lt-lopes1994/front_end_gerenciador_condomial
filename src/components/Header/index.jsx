import React from 'react';
import '../../styles/header.css';
import Drawer from '../Drawer';
import Avatar from '../Avatar';

export default function Header({ condominiumName }) {
  return (
    <header className='header'>
      <Drawer />
      <div className='headerContent'>
        <strong>{condominiumName}</strong>
        <strong>Seja bem vindo!</strong>
      </div>
      <div className='headerAvatar'>
        <Avatar />
      </div>
    </header>
  );
}
