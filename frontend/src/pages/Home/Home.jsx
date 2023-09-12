/* eslint-disable no-unused-vars */
import React from "react";
import "./styles.css";
import "./responsive.css";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Home() {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Logomarca" />
          <Link to="/Login">
            {" "}
            <span></span> Login
          </Link>
        </header>

        <main>
          <h1>Descubra o instrutor ideal para você!</h1>
          <p>
            Este é o lugar perfeito para achar um especialista que irá te ajudar
            a alcançar resultados excelentes no campo que mais importa para
            você.
          </p>
          <Link to="/Login">
            <span></span>
            <strong>Estudar</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;
