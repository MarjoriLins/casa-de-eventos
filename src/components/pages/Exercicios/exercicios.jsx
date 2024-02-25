import { useState, useRef, useMemo, useCallback } from "react";
import BotaoIncrementar from "../../BotaoIncrementar/botaoIncrementar";

function Exercicios() {
  // Exemplo de useRef
  const paragraphRef = useRef(null);
  const adicionarTexto = () => {
    if (paragraphRef.current) {
      paragraphRef.current.innerText += "Novo texto";
    }
  };
  // Exemplo de useMemo

  const [numero, setNumero] = useState(0);
  const calcularParOuImpar = (num) => {
    console.log("Calculando...");
    return num % 2 === 0 ? "par" : "impar";
  };
  const tipoNumero = useMemo(() => calcularParOuImpar(numero), [numero]);

  // Exemplo de useCallback
  const [count, setCount] = useState(0);
  const incrementar = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <h1>Exemplo de useRef</h1>
      <p ref={paragraphRef}>Esse é um parágrafo.</p>
      <button onClick={adicionarTexto}>Adicionar texto</button>
      <h1>Exemplo de useMemo</h1>
      <p>
        {numero} é um número {tipoNumero}
      </p>
      <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
      <h1>Exemplo de useCallback</h1>
      <p>Contador: {count}</p>
      <BotaoIncrementar incrementar={incrementar} />
    </>
  );
}

export default Exercicios;
