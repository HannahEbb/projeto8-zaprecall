import Pergunta from "./Pergunta"

// renderiza as perguntas numeradas

export default function Perguntas () {

let perguntas = [];
let num = 6 // Poderia ser um valor que o usuário adiciona num prompt

    for(let i = 0; i < num; i++){
        perguntas.push(i);
    } 

    return (
        <div>
        {perguntas.map(pergunta => <Pergunta pergunta={pergunta} />)}
        </div>
    );

}