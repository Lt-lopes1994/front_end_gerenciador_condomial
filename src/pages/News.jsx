import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Header from "../components/Header/index.jsx";
import api from "../services/api";
import "../styles/news.css";
import CreateNewsModal from "../components/CreateNewsModal/CreateNewsModal.jsx";

export default function News() {
  const [news, setNews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editNewsData, setEditNewsData] = useState(null);

  async function getNews() {
    try {
      const response = await api.get("/news");
      const news = response.data;
      setNews(news);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getNews();
    }, 1000);
  }, []);

  const { role } = jwtDecode(localStorage.getItem("token"));

  async function deleteNews(id) {
    try {
      await api.delete(`news/deletar/${id}`);
      getNews();
    } catch (error) {
      console.log(error);
    }
  }

  // Função para abrir o modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModal(false);
    setEditNewsData(null);
  };

  // Função para criar a notícia
  const handleCreateNews = async (formData) => {
    try {
      await api.post("/news/criar", formData);

      handleCloseModal();

      getNews();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditNews = async (formData) => {
    try {
      await api.patch(`/news/editar/${formData._id}`, formData);

      handleCloseModal();

      getNews();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenEditModal = (news) => {
    setEditNewsData(news);
    setShowModal(true);
  };

  return (
    <div>
      <Header condominiumName={"Residencial Canadá"} />
      {role === "admin" ? (
        <div>
          <button className="newsButton" onClick={handleOpenModal}>
            Criar notícia
          </button>
        </div>
      ) : (
        ""
      )}

      {/* Modal */}
      <CreateNewsModal
        show={showModal}
        handleClose={handleCloseModal}
        handleCreate={handleCreateNews}
        handleEditNews={handleEditNews}
        formData={editNewsData}
      />

      <section className="newsContent">
        <h1>Notícias</h1>
        <div className="newsCards">
          {news.map((news) => (
            <div key={news._id} className="newsCard">
              <img src={news.ULRimage} alt={news.alt} />
              <div className="newsContent">
                <h2>{news.title}</h2>
                <p>
                  {news.content.length > 150
                    ? `${news.content.substring(0, 150)}...`
                    : news.content}
                  {news.content.length > 150 && (
                    <span /* onClick={() => openModal(news.content)} */>
                      {" "}
                      Ler mais
                    </span>
                  )}
                </p>
                <p>
                  {role === "admin" ? (
                    <button
                      onClick={() => deleteNews(news._id)}
                      type="button"
                      className="deleteBtn"
                    >
                      Deletar
                    </button>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {role === "admin" ? (
                    <button
                      className="btnEditNews"
                      onClick={() => handleOpenEditModal(news)}
                    >
                      Editar
                    </button>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
