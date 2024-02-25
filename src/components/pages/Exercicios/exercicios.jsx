import { useRef } from "react";

function Exercicios() {
  // Exemplo de useRef
  const paragraphRef = useRef(null);
  const adicionarTexto = () => {
    if (paragraphRef.current) {
      paragraphRef.current.innerText += "Novo texto";
    }
  };
  return (
    <>
      <h1>Exemplo de useRef</h1>
      <p ref={paragraphRef}>Esse é um parágrafo.</p>
      <button onClick={adicionarTexto}>Adicionar texto</button>
    </>
  );
}

export default Exercicios;
