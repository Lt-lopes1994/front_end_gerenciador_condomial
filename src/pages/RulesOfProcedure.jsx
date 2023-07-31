import jwtDecode from 'jwt-decode';
import ImageBook from '../assets/23186847_6736957.svg';
import ImageDocs from '../assets/33756696_8081373.svg';
import Header from "../components/Header";
import '../styles/rulesOfProcedure.css';

function RulesOfProcedure() {
  const decodedToken = jwtDecode(localStorage.getItem("token"));

  var role = decodedToken.role;

  return (
    <>
      <Header condominiumName={"Residencial Canadá"} />
      <section className="containerRules">
        <img className='imgdocs' src={ImageDocs} alt="imagem de docus" />
        <div className="title">
          <strong>Regimento Interno</strong>
          <p className='pTitle'>Aqui você pode ler ou baixar o regimento interno do seu condomínio e
            ficar por dentro das regras.</p>
        </div>
        {role === "admin" ? <> <label htmlFor="File" className='labelFile'>Enviar Arquivo</label> <input className='input-file' type="file" name="File" id='File' /> </> : <button className='buttonBase'>Download</button>}
      </section>

      <hr />

      <section className='containerBook'>
        <div className="left">
          <img src={ImageBook} alt="imagem livro de regras" />
        </div>
        <div className="bookInfo">
          <p className='bookText' >O livro de reclamações é um instrumento de defesa dos direitos dos
            consumidores, que permite ao utente expor as suas reclamações sobre
            o funcionamento de um estabelecimento ou sobre a conduta de um
            profissional, com vista à melhoria da qualidade do serviço prestado.</p>
        </div>
      </section>
    </>
  );
}

export default RulesOfProcedure;
