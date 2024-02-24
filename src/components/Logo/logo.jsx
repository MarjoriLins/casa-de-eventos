import styled from "styled-components";

const LogoContainer = styled.div`
  width: 250px;
`;
const LogoImg = styled.img`
  height: 120px;
`;
function Logo() {
  return (
    <LogoContainer>
      <LogoImg src="./img/logo.svg" alt="Logo da casa de festas" />
    </LogoContainer>
  );
}

export default Logo;
