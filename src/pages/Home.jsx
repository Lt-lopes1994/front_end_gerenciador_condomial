/* eslint-disable import/no-extraneous-dependencies */
import Header from "../components/Header/index.jsx";
import CardHome from "../components/CardsHome/index.jsx";
import InfosCard from "../components/Card/index.jsx";
import "../styles/home.css";
import jwtDecode from "jwt-decode";

export default function Home() {
  const token = localStorage.getItem("token");

  const decoded = jwtDecode(token);

  const { name, role, tower, door, email, codeCondominium } = decoded;

  return (
    <div className="containerHome">
      <div className="containerHomeContent">
        <header>
          <Header />
        </header>
        <div className="containerHomeCards">
          <CardHome condominiumCode={codeCondominium} />
        </div>
        <section className="containerHomeHero">
          <div className="containerHomeHeroContent">
            <h1>{tower.toUpperCase()}</h1>
            <p>
              Seja bem vindo ao portal do seu condomínio. Confira abaixo as
              principais informações do seu condomínio e da sua torre{" "}
              {`${tower.slice(0, 1).toUpperCase()}${tower.slice(1)}`}!
            </p>
          </div>
          <div className="containerHomeHeroCard">
            <InfosCard
              alt={"Noticias do condomínio"}
              description={
                "Veja as últimas notícias do condomínio e fique por dentro de tudo que acontece no seu lar."
              }
              image={
                "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              title={"Notícias"}
              link={"/noticias"}
            />
            <InfosCard
              alt={"Codigo qr"}
              description={
                "Veja aqui os boletos do seu condomínio e faça o pagamento de forma rápida e segura. Veja também o histórico de inadimplência do seu condomínio."
              }
              image={
                "https://images.unsplash.com/photo-1595079836278-25b7ad6d5ddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              title={"Boletos"}
              link={"/contas"}
            />
            <InfosCard
              alt={"Imagem do condomínio"}
              description={
                "Veja aqui as datas de reservas das áreas comuns do seu condomínio e faça a sua reserva de forma rápida e segura."
              }
              image={
                "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              }
              title={"Areas Comuns"}
              link={"/areas-comuns"}
            />
            <InfosCard
              alt={"Regulamento interno e reclamações"}
              description={
                "Regulamento interno e reclamações. Veja aqui o regulamento interno do seu condomínio e faça reclamações de forma rápida e segura."
              }
              image={
                "https://images.unsplash.com/photo-1508169351866-777fc0047ac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              title={"Regimento Interno e Reclamações"}
              link={"/regimento-interno"}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
