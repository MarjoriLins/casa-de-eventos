import styled from "styled-components";

export const Container = styled.div`
  width: 1140px;
  height: calc(100vh - 240px);
  display: block;
  margin: auto;
  justify-content: center;
`;
export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  padding-top: 58px;
  font-size: 36px;
  font-weight: 400;
  color: #1f0049;
`;

export const Slogan = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 24px;
  line-height: 2em;
  color: #6f9f9c;
`;
export const Eventos = styled.div``;
export const EventosLista = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px 0 40px 0;
`;
export const EventosItem = styled.li`
  width: 360px;
  min-height: 320px;
  background-color: #ffff;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  list-style: none;
`;

export const EventoTitulo = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 18px;
  padding: 15px 15px 0 15px;
  font-weight: 300;
  line-height: 150%;
`;
export const EventoImagem = styled.img`
  padding: 15px;
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
`;
export const EventoDataHora = styled.p`
  font-size: 14px;
  padding: 15px;
  line-height: 150%;
`;
