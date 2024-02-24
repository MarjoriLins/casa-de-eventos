import styled from "styled-components";

const RodapeContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: left;
  background-color: #1f0049;
  color: #ffff;
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
