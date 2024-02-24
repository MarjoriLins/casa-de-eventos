import { Container, Title, Slogan } from "./homepage.styles";

import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";

function Homepage() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Title>Bem vindo a Casa de Eventos!</Title>
        <Slogan>Essa é a Casa de Festas que realiza sonhos.</Slogan>
      </Container>
      <Rodape />
    </>
  );
}

export default Homepage;
