import Header from "../components/Header";

function RulesOfProcedure() {
  return (
    <>
      <Header condominiumName={"Residencial Canadá"} />
      <section className="containerRules">
        <div className="containerRulesContent">
          <h1>Regimento Interno</h1>
          <p>
            Aqui você pode ler ou baixar o regimento interno do seu condomínio e
            ficar por dentro das regras.
          </p>
        </div>
      </section>
      <section className="containerRules">
        <div className="containerRulesContent">
          <h2>Livro de reclamações</h2>
          <p>
            O livro de reclamações é um instrumento de defesa dos direitos dos
            consumidores, que permite ao utente expor as suas reclamações sobre
            o funcionamento de um estabelecimento ou sobre a conduta de um
            profissional, com vista à melhoria da qualidade do serviço prestado.
          </p>
        </div>
      </section>
    </>
  );
}

export default RulesOfProcedure;
