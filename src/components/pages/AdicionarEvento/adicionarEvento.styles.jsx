import styled from "styled-components";

export const AddEventoContainer = styled.div`
  font-size: 17px;
  line-height: 200%;
  font-weight: 400;
  height: calc(100vh - 240px);
  width: 100%;
  padding-top: 58px;
  justify-content: center;
`;
export const FormTitle = styled.h1`
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 28px;'
  font-weight: 400;
  color: #1f0049;

`;

export const FormAdd = styled.form`
  width: 400px;
  display: block;
  margin: auto;
  justify-content: center;
  text-align: left;
  padding: 20px;
  border-radius: 5px;
`;

export const FormInput = styled.input`
  width: calc(100% - 20px);

  padding: 15px;
  border: none;
  height: 36px;
  font-size: 17px;
  line-height: 150%;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 125%;
  padding-top: 20px;
`;

export const FormButton = styled.button`
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
