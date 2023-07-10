import React, { useEffect, useState } from "react";
import "../../styles/cardHome.css";
import api from "../../services/api";

export default function CardHome() {
  const [condominium, setCondominium] = useState([]);

  async function getCondominium() {
    const response = await api.get("/condominio");
    console.log(response.data[0]);
    setCondominium(response.data[0]);
  }

  useEffect(() => {
    getCondominium();
  }, []);

  return (
    <div className="cardHome">
      <div className="cardHomeContent">
        <div className="cardHomeTitle">
          <strong>{condominium.name}</strong>
        </div>
        <div className="cardHomeDescription">
          <p>Informações sobre o condominio:</p>
          <p>
            Cidade:
            {condominium.city}
          </p>
          <p>
            Bairro:
            {condominium.neighborhood}
          </p>
          <p>
            Rua:
            {condominium.streetName}
          </p>
          <p>
            Número:
            {condominium.streetNumber}
          </p>
        </div>
        <div className="cardHomeFooter">
          <div className="cardHomeFooterContent">
            <div className="cardHomeFooterContentItem">
              <strong>1</strong>
              <p>Unidades</p>
            </div>
            <div className="cardHomeFooterContentItem">
              <strong>1</strong>
              <p>Visitantes</p>
            </div>
            <div className="cardHomeFooterContentItem">
              <strong>1</strong>
              <p>Visitantes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
