import Header from "../components/Header/index.jsx";
import CardHome from "../components/CardsHome/index.jsx";
import InfosCard from "../components/Card/index.jsx";
import "../styles/home.css";

export default function Home() {
  const handleClick = () => {
    console.log("Clicou");
  };

  return (
    <div className="containerHome">
      <div className="containerHomeContent">
        <header>
          <Header condominiumName={"Residencial Canadá"} />
        </header>
        <div className="containerHomeCards">
          <CardHome />
        </div>
        <section className="containerHomeHero">
          <div className="containerHomeHeroContent">
            <h1>Residencial Canadá</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
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
              alt={"Imagem do condomínio"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptates, quia voluptate quod exercitationem quos voluptatibus quas"
              }
              image={
                "https://images.unsplash.com/photo-1679862342461-5017d30f4f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              title={"Residencial Canadá"}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
