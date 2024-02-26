import { useState } from "react";
import axios from "axios";

import Cabecalho from "../../Cabecalho/cabecalho";
import Rodape from "../../Rodape/rodape";

import {
  AddEventoContainer,
  FormTitle,
  FormAdd,
  FormInput,
  FormLabel,
  FormButton,
} from "./adicionarEvento.styles";

const AdicionarEvento = () => {
  const [evento, setEvento] = useState({
    titulo: "",
    data: "",
    horario: "",
    preco: 0,
    url_da_imagem: "",
    evento_privado: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEvento((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/eventos",
        evento
      );
      console.log("Evento adicionado com sucesso", response.data);
      alert("Evento adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar evento", error);
      alert("Erro ao adicionar evento. Por favor, tente novamente.");
    }
  };

  return (
    <>
      <Cabecalho />
      <AddEventoContainer>
        <FormTitle>Adicionar Evento</FormTitle>
        <FormAdd onSubmit={handleSubmit}>
          <FormLabel>
            Título do Evento:
            <FormInput
              type="text"
              name="titulo"
              value={evento.titulo}
              onChange={handleChange}
            />
          </FormLabel>
          <br />
          <FormLabel>
            Data:
            <FormInput
              type="date"
              name="data"
              value={evento.data}
              onChange={handleChange}
            />
          </FormLabel>
          <br />
          <FormLabel>
            Hora:
            <FormInput
              type="time"
              name="horario"
              value={evento.horario}
              onChange={handleChange}
            />
          </FormLabel>
          <br />
          <FormLabel>
            Preço:
            <FormInput
              type="number"
              name="preco"
              value={evento.preco}
              onChange={handleChange}
            />
          </FormLabel>
          <br />
          <FormLabel>
            Url da imagem:
            <FormInput
              type="text"
              name="url_da_imagem"
              value={evento.url_da_imagem}
              onChange={handleChange}
            />
          </FormLabel>
          <br />
          <FormLabel>
            Evento privado:
            <FormInput
              type="checkbox"
              name="evento_privado"
              checked={evento.evento_privado}
              onChange={handleChange}
            />
          </FormLabel>
          <br />
          <FormButton type="submit">Adicionar</FormButton>
          <br />
        </FormAdd>
      </AddEventoContainer>
      <Rodape />
    </>
  );
};

export default AdicionarEvento;
