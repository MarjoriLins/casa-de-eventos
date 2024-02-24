import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";

function Homepage() {
  return (
    <>
      <Cabecalho />
      <div className="conteudo">
        <h1>Bem vindo a Casa de Eventos!</h1>
      </div>
      <Rodape />
    </>
  );
}

export default Homepage;
