import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "../../styles/cardHome.css";

export default function CardHome() {
  const [condominium, setCondominium] = useState([]);

  async function getCondominium() {
    const response = await api.get("/condominio");
    console.log(response.data[0]);
    setCondominium(response.data[0]);
    console.log(response);
  }

  useEffect(() => {
    getCondominium();
  }, []);

  return (
    <div className="cardHome">
      <div className="cardHomeContent">
        <div className="cardHomeTitle">
          <strong></strong>
        </div>
        <div className="cardHomeDescription">
          <p>Informações sobre o condominio:</p>
          <p>
            Cidade:

          </p>
          <p>
            Bairro:

          </p>
          <p>
            Rua:

          </p>
          <p>
            Número:

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
