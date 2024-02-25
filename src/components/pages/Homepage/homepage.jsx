import { useState, useEffect, useRef } from "react";
import {
  Container,
  Title,
  Slogan,
  Eventos,
  EventosLista,
} from "./homepage.styles";
import axios from "axios";

import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";
import Card from "../../Card/card";

function Homepage() {
  const [eventos, setEventos] = useState([]);

  // Exemplo de useRef

  const paragraphRef = useRef(null);

  useEffect(() => {
    const listarEventos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/eventos");
        setEventos(response.data);
      } catch (error) {
        console.error("Erro ao buscar eventos", error);
      }
    };
    listarEventos();
  });

  const adicionarTexto = () => {
    if (paragraphRef.current) {
      paragraphRef.current.innerText += "Novo texto";
    }
  };
  return (
    <>
      <Cabecalho />
      <Container>
        <Title>Bem vindo a Casa de eventos!</Title>
        <Slogan>Essa é a casa de festas que realiza sonhos.</Slogan>
        <Eventos>
          <EventosLista>
            {eventos.map((evento, index) => (
              <Card
                key={index}
                titulo={evento.titulo}
                urlImagem={evento.url_da_imagem}
                data={evento.data}
                horario={evento.horario}
                id={evento.id}
              />
            ))}
          </EventosLista>
        </Eventos>
      </Container>
      <h1>Teste de useRef</h1>
      <p ref={paragraphRef}> Aqui Vai Entrar o Texto!</p>
      <button onClick={adicionarTexto}>Adicionar Texto</button>
      <Rodape />
    </>
  );
}

export default Homepage;
