import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login/login.jsx";
import Homepage from "./components/pages/Homepage/homepage.jsx";
import Contato from "./components/pages/Contato/contato.jsx";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
