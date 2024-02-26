import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  LoginContainer,
  LoginContent,
  LoginBox,
  LoginTitle,
  FormBox,
  FormItem,
  FormLabel,
  FormInput,
  FormButton,
  Sidebar,
  SidebarContainer,
  LogoContainer,
  Logo,
} from "./login.styles";

const Login = () => {
  // Aqui ficam meus hooks, funções e etc..

  // Aqui ficam minhas declarações de Hooks
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  // Função para consultar API e verificar se o login e senha estão corretos
  const EfetuarLogin = async () => {
    try {
      // Chamada da API de usuários
      const response = await axios.get("http://localhost:3000/usuarios");
      const usuarios = response.data;
      // Verifica se o nome e senha batem
      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.nome === nome && usuario.senha === senha
      );
      if (usuarioEncontrado) {
        toast.success("Login efetuado com sucesso!", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/admin");
        }, 3000);
      } else {
        toast.error("Nome ou senha inválidos", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Erro ao buscar eventos", error);
    }
  };

  return (
    <LoginContainer>
      <Sidebar>
        <SidebarContainer>
          <LogoContainer>
            <Logo src="./img/logo.svg" alt="Logo da casa de festas" />
          </LogoContainer>
        </SidebarContainer>
      </Sidebar>
      <LoginContent>
        <LoginBox>
          <LoginTitle>Área de Login:</LoginTitle>
          <FormBox>
            <FormItem>
              <FormLabel>Nome: </FormLabel>
              <FormInput
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Senha: </FormLabel>
              <FormInput
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </FormItem>
            <FormItem>
              <FormButton onClick={EfetuarLogin}>Entrar</FormButton>
            </FormItem>
            <ToastContainer />
          </FormBox>
        </LoginBox>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
