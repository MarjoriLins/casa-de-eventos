import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  width: calc(100% - 250px);
  height: 120px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  list-style: none;
`;

const MenuLink = styled(Link)`
  color: #e2d8a5;
  text-decoration: none;
  padding: 0 15px;
  &:hover {
    color: #6f9f9c;
  }
`;

function Menu() {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <MenuLink to="/">Homepage</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/contato">Contato</MenuLink>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
}

export default Menu;
