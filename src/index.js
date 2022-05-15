import ReactDOM from "react-dom";
import "./assets/css/reset.css";
import "./assets/css/styles.css";
import LogoInicio from "./components/LogoInicio";
import BotaoIniciar from "./components/BotaoIniciar";
import LogoPequena from "./components/LogoPequena";
import Perguntas from "./components/Perguntas";
import Footer from "./components/Footer";

// import cao from "./assets/img/cao.png";
// import gato from "./assets/img/gato.png";

function App() {

// lógica para determinar o que será exibido na tela?

    return (
        <React.Fragment>
            <LogoInicio />
            <BotaoIniciar />

            <LogoPequena /> 
            <Perguntas />
            <Footer />
        </React.Fragment>
    );
}



ReactDOM.render(<App />, document.querySelector(".root"));
