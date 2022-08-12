import React, { useState } from "react";
import CaixaTeste from "./CaixaTeste";
import "./Corpo.css";

export default () => {
  const [valorParagrafo, setValorParagrafo] = useState();

  return (
    <>
      <h2>Corpo</h2>
      <img src="" alt="" />

      <p></p>
      <p></p>
      <p></p>
      <section className="caixa">
        <CaixaTeste>
          <p>teste valor paragrafo Corpo porém indo para caixa teste</p>
        </CaixaTeste>
      </section>
    </>
  );
};
