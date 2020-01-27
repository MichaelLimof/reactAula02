import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//elemento usando JSX
const elemento = (
  <div>
    <h2>teste dev!</h2>
  </div>
);

//sem usar JSX
const elementoSemJSX = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "teste sem JSX")
);
const MostrarI = props => {
  return <h2>{props.i}</h2>;
};
//componente =  uma estrutura que retorna elementos
//pode -se receber parametros
function App(props) {
  //vetor onde i= posição 0 e SetI= posição 1
  const [i, setI] = useState(1); //hook guarda  o valor da viariavel externamente

  const incremento = () => {
    setI(i + 1);
  };
  const decremento = () => {
    setI(i - 1);
  };
  return (
    <div className="App">
      {elemento}
      {elementoSemJSX}
      <MostrarI i={i} />

      <button onClick={incremento}>Incrementar</button>
      <h1>{i}</h1>
      <button onClick={decremento}>Decrementar</button>
      <h1>{props.name}</h1>
    </div>
  );
}

//class ES6

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Dev no teste de parametros " />, rootElement);
