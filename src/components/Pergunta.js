import react from "react";
import Perguntas from "./Perguntas"
import Card from "./Card";


export default function Pergunta() {

const [classe, setClassName] = React.useState("pergunta");


    return (
        <div className={ classe } onClick={ () => setClassName("pergunta card")}>
            <ul>Pergunta{ pergunta }<ion-icon name="play-outline"></ion-icon></ul>
            <Card />
        </div>
    );
}

