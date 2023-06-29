/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-key */
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Header from "../components/Header/index.jsx";
import api from "../services/api";
import "../styles/news.css";

function News() {
  const [news, setNews] = useState([]);

  async function getNews() {
    const response = await api.get("/news");
    console.log(response.data);
    setNews(response.data);
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
            <div className="newsCard">
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
