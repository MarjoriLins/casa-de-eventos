import { Container, Title } from "./contato.styles";

import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";

function Contato() {
  // Aqui entrariam as funções JavaScript, Hooks e etc..
  return (
    // Tudo que será exibido aqui será renderizado na tela
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
