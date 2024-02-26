import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login/login.jsx";
import ListaEventos from "./components/pages/ListaEventos/listaEventos.jsx";
import AdicionarEvento from "./components/pages/AdicionarEvento/adicionarEvento.jsx";
import Homepage from "./components/pages/Homepage/homepage.jsx";
import DetalhesEvento from "./components/pages/DetalhesEvento/detalhesEvento.jsx";
import Contato from "./components/pages/Contato/contato.jsx";

import Exercicios from "./components/pages/Exercicios/exercicios.jsx";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ListaEventos />} />
        <Route path="/adicionar-evento" element={<AdicionarEvento />} />
        <Route path="/evento/:id" element={<DetalhesEvento />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/exercicios" element={<Exercicios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
