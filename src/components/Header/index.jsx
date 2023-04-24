import React, { useState } from "react";
import "../../styles/header.css";
import Drawer from "../Drawer/index.jsx";
import Avatar from "../Avatar/index.jsx";
import Menu from "../Menu/index.jsx";

export default function Header({ condominiumName }) {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
    console.log(open);
  }
  return (
    <header className="header">
      <Drawer />
      <div className="headerContent">
        <strong>{condominiumName}</strong>
        <strong>Seja bem vindo!</strong>
      </div>
      <div className="headerAvatar">
        {/* <Avatar handleOpen={handleOpen} /> */}
        <Menu />
      </div>
    </header>
  );
}
