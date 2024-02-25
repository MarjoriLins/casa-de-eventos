import {
  EventosItem,
  EventoTitulo,
  EventoImagem,
  EventoDataHora,
  EventoLink,
} from "./card.styles";

function Card(titulo, urlImagem, data, horario, id) {
  return (
    <EventosItem>
      <EventoTitulo>{titulo}</EventoTitulo>
      <EventoImagem src={urlImagem} alt={titulo} />
      <br />
      <EventoDataHora>
        Data e hora {data} - {horario}
      </EventoDataHora>
      <EventoLink to={`/evento/${id}`}>Mais detatlhes</EventoLink>
    </EventosItem>
  );
}

export default Card;
