import ReactDOM from "react-dom";
import React from 'react';
import "./assets/css/reset.css";
import "./assets/css/styles.css";
import TelaInicial from "./components/TelaInicial";
import TelaZap from "./components/TelaZap";

// import cao from "./assets/img/cao.png";
// import gato from "./assets/img/gato.png";

function App() {

// lógica para determinar o que será exibido na tela?



    return (
        <>
            <TelaInicial />
            <TelaZap/>
        </>
    );
}



ReactDOM.render(<App />, document.querySelector(".root"));
