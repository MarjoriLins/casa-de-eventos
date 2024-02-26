import { useState, useEffect, useMemo } from "react";
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
  const [filtroTitulo, setFiltoTitulo] = useState("");

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

  const eventosFiltrados = useMemo(() => {
    return eventos.filter((evento) => {
      return evento.titulo.toLowerCase().includes(filtroTitulo.toLowerCase());
    });
  }, [eventos, filtroTitulo]);

  const handleInputChange = (e) => {
    setFiltoTitulo(e.target.value);
  };

  return (
    <>
      <Cabecalho />
      <Container>
        <Title>Bem vindo a Casa de eventos!</Title>
        <Slogan>Essa é a casa de festas que realiza sonhos.</Slogan>
        <input
          type="text"
          placeholder="Pesquisar eventos"
          value={filtroTitulo}
          onChange={handleInputChange}
        />

        <Eventos>
          <EventosLista>
            {eventosFiltrados.map((evento, index) => (
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

      <Rodape />
    </>
  );
}

export default Homepage;
