import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  Listah2,
} from "./listaEventos.styles";

function ListaEventos() {
  const [eventos, setEventos] = useState([]);
  const [filtroTitulo, setFiltoTitulo] = useState("");

  const excluirEvento = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/eventos/${id}`);
      const eventosFiltrados = eventos.filter((evento) => evento.id !== id);
      setEventos(eventosFiltrados);
      toast.success("Evento removido com sucesso!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao deletar a mensagem!" + error, {
        position: "top-right",
        autoClose: 3000,
      });
    }
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
      <ListaContainer>
        <ListaTitulo>Lista de Eventos Cadastrados:</ListaTitulo>
        <Listah2>Pesquisar:</Listah2>
        <input
          type="text"
          placeholder="Pesquisar eventos"
          value={filtroTitulo}
          onChange={handleInputChange}
        />
        <Tabela>
          <CabecalhoTabela>
            <CabecalhoLinha>
              <CabecalhoItem>Título</CabecalhoItem>
              <CabecalhoItem>Data e Hora</CabecalhoItem>
              <CabecalhoItem>Preço</CabecalhoItem>
              <CabecalhoItem>URL da Imagem</CabecalhoItem>
              <CabecalhoItem width="100px">Privado?</CabecalhoItem>
              <CabecalhoItem>Ações</CabecalhoItem>
            </CabecalhoLinha>
          </CabecalhoTabela>
          <CorpoTabela>
            {eventosFiltrados.map((evento, index) => (
              <Evento key={index}>
                <EventoItem>{evento.titulo}</EventoItem>
                <EventoItem>
                  {evento.data} - {evento.horario}
                </EventoItem>
                <EventoItem>{evento.preco}</EventoItem>
                <EventoItem>{evento.url_da_imagem}</EventoItem>
                <EventoItem>{evento.evento_privado ? "Sim" : "Não"}</EventoItem>
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
        <ToastContainer />
      </ListaContainer>
      <Rodape />
    </>
  );
}

export default ListaEventos;
