import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  font-size: 17px;
  line-height: 200%;
  font-weight: 400;
`;

export const LoginTitle = styled.h1`
  font-family: "Playfair Display", serif;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  color: #1f0049;
`;

export const Sidebar = styled.aside`
  color: #ffffff;
  background-color: #1f0049;
  height: 100vh;
  width: 38%;
`;
export const SidebarContainer = styled.div`
  width: 500px;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
  width: 100%;
`;

export const LoginContent = styled.main`
  width: 62%;
  height: 100vh;
  background-color: #e2d8a5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginBox = styled.div`
  width: 460px;
`;

export const FormBox = styled.form``;

export const FormItem = styled.div`
  padding-top: 20px;
  &: last-of-type {
    margin-bottom: 20px;
  }
`;

export const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 125%;
`;

export const FormInput = styled.input`
  display: block;
  width: calc(100% - 30px);
  margin-top: 5px;
  padding: 0 15px;
  border: none;
  height: 36px;
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

export const FormButton = styled(Link)`
  display: block;
  margin: auto;
  text-align: center;
  width: 140px;
  height: 44px;
  border: 1px solid transparent;
  border-radius: 22px;
  background-color: #1f0049;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 44px;
  text-decoration: none;
`;

export const ErrorMessage = styled.p``;
