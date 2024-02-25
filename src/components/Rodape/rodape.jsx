import styled from "styled-components";

const RodapeContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f0049;
  color: #e2d8a5;
`;

const RodapeText = styled.p`
  padding: 0 15px;
`;

function Rodape() {
  return (
    <RodapeContainer>
      <RodapeText>
        Copyright © 2024 | Todos os direitos reservados. | Desenvolvido por
        Marjori A. Lins.
      </RodapeText>
    </RodapeContainer>
  );
}

export default Rodape;
