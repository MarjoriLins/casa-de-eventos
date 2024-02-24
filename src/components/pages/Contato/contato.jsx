import { Link } from "react-router-dom";
import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";

function Contato() {
  return (
    <>
      <Cabecalho />
      <div className="conteudo">
        <h1>Formulário de Contato aqui!</h1>
        <Link to="/homepage">Ir para Homepage</Link>
        <Link to="/">Voltar para Login</Link>
      </div>
      <Rodape />
    </>
  );
}

export default Contato;
