import { Container, Title } from "./contato.styles";

import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";

function Contato() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Title>Página de Contato</Title>
      </Container>
      <Rodape />
    </>
  );
}

export default Contato;
