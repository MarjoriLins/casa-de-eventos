import { useParams } from "react-router-dom";

import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";

function DetalhesEvento() {
  const { id } = useParams();
  return (
    <>
      <Cabecalho />
      <h1>Detalhes do evento {id}</h1>
      <Rodape />
    </>
  );
}

export default DetalhesEvento;
