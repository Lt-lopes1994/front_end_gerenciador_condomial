import React, { useEffect, useState } from "react";
import "../../styles/cardHome.css";
import api from "../../services/api";

export default function CardHome(condominiumCode) {
  const [condominium, setCondominium] = useState([]);

  async function getCondominium(condominiumCode) {
    const response = await api.get(
      `condominio/code/${condominiumCode.condominiumCode}`
    );

    setCondominium(response.data);
  }

  useEffect(() => {
    getCondominium(condominiumCode);
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
              <strong>6</strong>
              <p>Visitantes</p>
              <p style={{ marginTop: "-15px" }}>Cadastrados</p>
            </div>
            <div className="cardHomeFooterContentItem">
              <strong>2</strong>
              <p>Encomendas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
