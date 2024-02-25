import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  // Aqui ficam meus hooks, funções e etc..

  // Aqui ficam minhas declarações de Hooks
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
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
        navigate("/admin");
      } else {
        setErro("Nome ou senha inválidos");
      }
    } catch (error) {
      console.error("Erro ao buscar eventos", error);
    }
  };

  return (
    // Aqui entra o formulário de login
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={EfetuarLogin}>Entrar</button>
      {erro && <p>{erro}</p>}
    </div>
  );
};

export default Login;
