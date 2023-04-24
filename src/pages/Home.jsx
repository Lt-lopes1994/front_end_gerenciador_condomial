import Header from "../components/Header/index.jsx";
import CardHome from "../components/CardsHome/index.jsx";
import InfosCard from "../components/Card/index.jsx";
import "../styles/home.css";

export default function Home() {
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
              alt={"Imagem do condomínio"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptates, quia voluptate quod exercitationem quos voluptatibus quas"
              }
              image={
                "https://images.unsplash.com/photo-1679862342461-5017d30f4f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              title={"Residencial Canadá"}
              link={"/condominium"}
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
