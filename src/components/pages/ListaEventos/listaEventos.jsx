import { useState, useEffect } from "react";
import axios from "axios";

import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";

import {
  ListaContainer,
  ListaTitulo,
  Tabela,
  CabecalhoTabela,
  CabecalhoLinha,
  CabecalhoItem,
  CorpoTabela,
  Evento,
  EventoItem,
  BotaoRemover,
} from "./listaEventos.styles";

function ListaEventos() {
  const [eventos, setEventos] = useState([]);

  const excluirEvento = async (id) => {
    console.log(id);
  };

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
  return (
    <>
      <Cabecalho />
      <ListaContainer>
        <ListaTitulo>Lista de Eventos Cadastrados:</ListaTitulo>
        <Tabela>
          <CabecalhoTabela>
            <CabecalhoLinha>
              <CabecalhoItem>Título</CabecalhoItem>
              <CabecalhoItem>Data e Hora</CabecalhoItem>
              <CabecalhoItem>Preço</CabecalhoItem>
              <CabecalhoItem>URL da Imagem</CabecalhoItem>
              <CabecalhoItem width="100px">É Privado?</CabecalhoItem>
              <CabecalhoItem>Ações</CabecalhoItem>
            </CabecalhoLinha>
          </CabecalhoTabela>
          <CorpoTabela>
            {eventos.map((evento, index) => (
              <Evento key={index}>
                <EventoItem>{evento.titulo}</EventoItem>
                <EventoItem>
                  {evento.data} - {evento.horario}
                </EventoItem>
                <EventoItem>{evento.preco}</EventoItem>
                <EventoItem>{evento.url_da_imagem}</EventoItem>
                <EventoItem width="100px">{evento.esta_privado}</EventoItem>
                <EventoItem>
                  <BotaoRemover
                    onClick={() => {
                      excluirEvento(evento.id);
                    }}
                  >
                    Excluir
                  </BotaoRemover>
                </EventoItem>
              </Evento>
            ))}
          </CorpoTabela>
        </Tabela>
      </ListaContainer>
      <Rodape />
    </>
  );
}

export default ListaEventos;
