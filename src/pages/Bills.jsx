import Header from "../components/Header/index.jsx";
import PieChart from "../components/Chart/PieChart.jsx";
import { useState } from "react";
import { delinquecyData } from "../data/delinquencyRates.js";
import "../styles/bills.css";

export default function Bills() {
  const [delinquencyRate, setDelinquencyRate] = useState({
    labels: delinquecyData.map((item) => item.month),
    datasets: [
      {
        label: "Índice de inadimplência em unidades",
        data: delinquecyData.map((item) => `${item.defaultRate}`),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#e74c3c",
          "#34495e",
          "#95a5a6",
          "#f1c40f",
          "#e67e22",
          "#e74c3c",
          "#34495"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function (
            previousValue,
            currentValue,
            currentIndex,
            array
          ) {
            console.log(previousValue, currentValue, currentIndex, array);
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.round((currentValue / total) * 100);
          return percentage + "%";
        }
      }
    }
  };

  return (
    <>
      <div>
        <Header condominiumName={"Residencial Canadá"} />
      </div>
      <section className="containerCharges">
        <h1>Boletos</h1>
        <div className="containerChargesContent">
          <div className="containerChargesCard">
            <div className="containerChargesCardHeader">
              <h2>Tire seu boleto</h2>
              <p>
                Veja aqui os boletos do seu condomínio e faça o pagamento de
                forma rápida e segura. Veja também o histórico de inadimplência
                do seu condomínio.
              </p>
            </div>
            <div className="containerChargesCardFooter">
              <button className="btnBills">Ver boletos</button>
            </div>
          </div>
          <div className="containerChargesCard">
            <div className="containerChargesCardHeader">
              <h2>Índice de inadimplência</h2>
              <p>
                Veja aqui os boletos do seu condomínio e faça o pagamento de
                forma rápida e segura. Veja também o histórico de inadimplência
                do seu condomínio.
              </p>
            </div>
            <div className="pieChart">
              <PieChart chartData={delinquencyRate} options={options} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
