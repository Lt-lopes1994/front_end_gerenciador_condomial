import Header from "../components/Header";
import InfosCard from "../components/Card";
import "../styles/commonAreas.css";
import Calendar from "../components/ReservationCalendar";

function CommonAreas() {
  return (
    <>
      <Header condominiumName={"Residencial Canadá"} />
      <section className="containerCommonAreas">
        <div className="commonAreasTitle">
          <h1>Áreas comuns</h1>
          <h4>
            Faça a reserva das áreas comuns do seu condomínio de forma rápida e
            segura. Verifique a disponibilidade e faça a sua reserva.
          </h4>
        </div>

        <div className="containerHomeCards">
          <div className="containerHomeCardsContent">
            <h1>
              Selecionar a área comum que deseja reservar e verificar a
              disponibilidade
            </h1>
            <div className="containerHomeCardsContentCard">
              <InfosCard
                image={
                  "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                }
                alt={"quadra de esportes"}
                title={"Quadra de esportes"}
                description={
                  "Veja aqui a disponibilidade da quadra de esportes e faça a sua reserva"
                }
                link={"/areas-comuns"}
              />
              <InfosCard
                image={
                  "https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
                alt={"Imagem do condomínio"}
                title={"Salão de festas"}
                description={
                  "Veja aqui a disponibilidade do salão de festas e faça a sua reserva"
                }
                link={"/areas-comuns"}
              />
            </div>
            <Calendar />
          </div>
        </div>
      </section>
    </>
  );
}
export default CommonAreas;
