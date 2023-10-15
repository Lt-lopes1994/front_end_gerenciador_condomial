import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import ImageBook from '../assets/23186847_6736957.svg';
import ImageDocs from '../assets/33756696_8081373.svg';
import Header from "../components/Header";
import api from '../services/api';
import '../styles/rulesOfProcedure.css';
// import Form from 'react-bootstrap/Form';

function RulesOfProcedure() {
  const decodedToken = jwtDecode(localStorage.getItem("token"));
  var role = decodedToken.role;
  const [file, setFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);

    try {
      const formData = new FormData();
      formData.append('file', file);

      await api.post("/regimento/upload", formData, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleDownload = async () => {
    try {
      const url = await api.get("/regimento")


      window.open(url.data, '_blank');
    } catch (error) {
      console.log(error)
    }
  }

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
        {
          role === "admin" ?
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <label htmlFor="File" className='labelFile'>Selecionar Arquivo</label>
              <input className='input-file' type="file" name="File" id='File' onChange={handleOnChange} />
              <button type='submit' className='submit-file-btn'>
                Enviar Arquivo
              </button>
            </form>
            // <> <label htmlFor="File" className='labelFile'>Enviar Arquivo</label> <input className='input-file' type="file" name="File" id='File' onSubmit={handleSubmit} />
            // </> 
            :
            <button className='buttonBase' onClick={handleDownload}>Download</button>
        }
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
