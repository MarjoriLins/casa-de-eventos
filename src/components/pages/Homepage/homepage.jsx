import { Link } from "react-router-dom";
import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";

function Homepage() {
  return (
    <>
      <Cabecalho />
      <div className="conteudo">
        <h1>Bem vindo a Casa de Eventos!</h1>
        <Link to="/contato">Ir para Contato</Link>
        <Link to="/login">Voltar para Login</Link>
      </div>
      <Rodape />
    </>
  );
}

export default Homepage;
