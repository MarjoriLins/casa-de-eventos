import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  font-size: 17px;
  line-height: 200%;
  font-weight: 400;
`;

export const LoginTitle = styled.h1``;

export const Sidebar = styled.aside`
  color: #ffffff;
  background-color: #1f0049;
  height: 100vh;
  width: 38%;
`;
export const SidebarContainer = styled.div``;

export const LogoContainer = styled.div``;

export const Logo = styled.img``;

export const LoginContent = styled.main`
  width: 62%;
  height: 100vh;
  background-color: #e2d8a5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginBox = styled.div``;

export const FormBox = styled.form``;

export const FormItem = styled.div``;

export const FormLabel = styled.label``;

export const FormInput = styled.input``;

export const FormButton = styled(Link)`
  text-decoration: none;

  color: #ffffff;
  padding: 0 15px;
  &:hover {
    color: #6f9f9c;
  }

  font-weight: 600;
  font-size: 16px;

  background-color: #1f0049;
`;

export const ErrorMessage = styled.p``;
