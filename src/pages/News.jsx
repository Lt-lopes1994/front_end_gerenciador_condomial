import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Header from "../components/Header/index.jsx";
import api from "../services/api";
import "../styles/news.css";

function News() {
  const [news, setNews] = useState([]);

  async function getNews() {
    try {
      const response = await api.get("/news");
      const news = response.data;
      setNews(news);
    } catch (error) {
      console.log(error);
    }
  }

  async function refreshAccessToken() {
    try {
      const refreshToken = localStorage.getItem("token");
      const response = await api.put("/token/refresh", {
        oldToken: refreshToken
      });
      const { access_token } = response.data;

      // Atualizar o token de acesso no localStorage ou em algum estado global
      localStorage.setItem("token", access_token);

      // Atualizar o cabeçalho Authorization do Axios com o novo token de acesso
      api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    } catch (error) {
      throw new Error("Erro ao renovar o token de acesso");
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  const { role } = jwtDecode(localStorage.getItem("token"));

  return (
    <div>
      <Header condominiumName={"Residencial Canadá"} />
      {role === "admin" ? (
        <div>
          <button className="newsButton">
            <a href="/news/create">Criar notícia</a>
          </button>
        </div>
      ) : (
        ""
      )}
      <section className="newsContent">
        <h1>Notícias</h1>
        <div className="newsCards">
          {news.map((news) => (
            <div key={news._id} className="newsCard">
              <img src={news.ULRimage} alt={news.alt} />
              <div className="newsContent">
                <h2>{news.title}</h2>
                <p>{news.content.substring(0, 200).concat("...")}</p>
                <p>
                  {role === "admin" ? (
                    <button className="deleteBtn">
                      <a href={`/news/delete/${news.id}`}>Deletar</a>
                    </button>
                  ) : (
                    ""
                  )}
                </p>
                <p>{role === "admin" ? "Alterar" : ""}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;
