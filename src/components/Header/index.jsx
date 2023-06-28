import React, { useState } from "react";
import "../../styles/header.css";
import Drawer from "../Drawer/index.jsx";
import Avatar from "../Avatar/index.jsx";
import Menu from "../Menu/index.jsx";
import jwtDecode from "jwt-decode";

export default function Header() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
    console.log(open);
  }

  const decodedToken = jwtDecode(localStorage.getItem("token"));

  const { name } = decodedToken;

  return (
    <header className="header">
      <Drawer />
      <div className="headerContent">
        <strong>{name}</strong>
        <strong>Seja bem vindo!</strong>
      </div>
      <div className="headerAvatar">
        {/* <Avatar handleOpen={handleOpen} /> */}
        <Menu />
      </div>
    </header>
  );
}
