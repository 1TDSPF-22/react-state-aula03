import React from "react";
import "./App.css";
import ComponenteTeste from "./ComponenteTeste";

export default () => {
  let paragrafo = {
    fontSize: "2rem",
    color: "darkgreen",
    textAlign: " center",
  };

  return (
    <>
      <h1>Contéudo App.js</h1>
      <p style={paragrafo}>Formas de inserir CSS em um componente</p>
      <p className="exemplo">Aqui é um exemplo de className</p>
      <ComponenteTeste />
    </>
  );
};
