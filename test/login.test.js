import "../styles/login.css";
import Login from "../pages/Login";
import { render, screen } from "@testing-library/react";

describe("Login", () => {
  it("deve renderizar o formulário de login", async () => {
    const { getByTestId, getByLabelText } = render(<Login />);

    const emailInput = getByLabelText("E-mail");
    const passwordInput = getByLabelText("Senha");
    const loginButton = getByTestId("login-button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("deve enviar o formulário de login e redirecionar para a página inicial", async () => {
    const { getByTestId, getByLabelText, getByText } = render(<Login />);

    const emailInput = getByLabelText("E-mail");
    const passwordInput = getByLabelText("Senha");
    const loginButton = getByTestId("login-button");

    emailInput.value = "teste@example.com";
    passwordInput.value = "123456";
    await loginButton.click();

    expect(screen.toHaveText("Bem-vindo ao Condomínio Online!"));
  });

  it("deve exibir uma mensagem de erro se o formulário for inválido", async () => {
    const { getByTestId, getByLabelText, getByText } = render(<Login />);

    const emailInput = getByLabelText("E-mail");
    const passwordInput = getByLabelText("Senha");
    const loginButton = getByTestId("login-button");

    emailInput.value = "";
    passwordInput.value = "";
    await loginButton.click();

    expect(screen.toHaveText("O e-mail ou senha está incorreto."));
  });
});