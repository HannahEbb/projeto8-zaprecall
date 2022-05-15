import React from "react";
import Card from "./Card";



export default function Perguntas () {

    const [classeP, setClassNameP] = React.useState("pergunta");
    const numeradas = [1, 2, 3, 4, 5, 6];

    const [classeC, setClassNameC] = React.useState("display-none");

    function perguntaClicada () {
        setClassNameP("pergunta card");
        setClassNameC("");
    }

    return (
    <div>
     {numeradas.map(i => <div className={ classeP } onClick={ perguntaClicada }>
        <ul>Pergunta { i } <ion-icon name="play-outline"></ion-icon></ul>
        <Card classeC={ classeC }/> 
        </div>)}
    </div>
    );

}