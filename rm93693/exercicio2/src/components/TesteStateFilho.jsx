import React, { useState } from "react";

export default (props) => {
  return (
    <>
      <p>Valor de State no filho: {props.valor}</p>
      <button onClick={() => props.aumentar()}>Aumentar</button>
    </>
  );
};
