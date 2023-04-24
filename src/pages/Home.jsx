import Header from "../components/Header/index.jsx";
import CardHome from "../components/CardsHome/index.jsx";

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
      </div>
    </div>
  );
}
