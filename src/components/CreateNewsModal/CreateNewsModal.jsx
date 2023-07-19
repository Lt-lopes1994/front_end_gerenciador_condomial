import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateNewsModal = ({ show, handleClose, handleCreate, formData }) => {
  const { id } = jwtDecode(localStorage.getItem("token"));

  const [formValues, setFormValues] = useState({
    ULRimage: "",
    alt: "",
    title: "",
    content: "",
    user: id
  });

  useEffect(() => {
    if (formData) {
      setFormValues(formData);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClearForm = () => {
    setFormValues({
      ULRimage: "",
      alt: "",
      title: "",
      content: "",
      user: id
    });
  };

  const handleSubmit = () => {
    handleCreate(formValues);
    handleClearForm();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Criar nova noticia</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="image">
            <Form.Label>URL da imagem</Form.Label>
            <Form.Control
              type="text"
              name="ULRimage"
              value={formValues.ULRimage}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="alt">
            <Form.Label>Texto para leitura de tela da Imagem</Form.Label>
            <Form.Control
              type="text"
              name="alt"
              value={formValues.alt}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formValues.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>Conteudo</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="content"
              value={formValues.content}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button class="btn btn-outline-danger" onClick={handleClose}>
          Fechar
        </Button>
        <Button class="btn btn-outline-success" onClick={handleSubmit}>
          Salvar Alterações
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateNewsModal;
