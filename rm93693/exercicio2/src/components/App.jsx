import React from "react";
import "./App.css";
import CompTeste from "./CompTeste";
import Corpo from "./Corpo";
import Footer from "./Footer";
import Header from "./Header";
import TesteState from "./TesteState";

export default () => {
  return (
    <>
      <Header />
      <Corpo />
      <CompTeste />
      <TesteState />
      <Footer />
    </>
  );
};
