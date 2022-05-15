import React from "react";
import Perguntas from "./Perguntas";
import setinha from "../assets/img/setinha.png";


// t = 2h -> https://us06web.zoom.us/rec/play/gIcaqsl0GwLP9X7bdfixmPtLgrFvXl6V_BA009w1SPgrTpYvH-_huu0FO713ACdrlfzW9QxmYyjKj5xg.z3ttclhlSvjghxbz?startTime=1652132151000&_x_zm_rtaid=IYsBA1HRQX-5fajAKe5_RA.1652612527439.6e856aa575bbff737369859d063f73b4&_x_zm_rhtaid=19
// passar o botao clicado como props para o objeto -> para usar no footer 

const deck = [
    {Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript", },
    {Q: "O React é __", R: "uma biblioteca JavaScript para construção de interfaces"},
    {Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma"},
    {Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências"},
    {Q: "Usamos props para __", R: "passar diferentes informações para componentes"},
    {Q: "Usamos estado (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
 ]; //embaralhar o deck

 export default function Card({ classeC }) {

     // depois de clicar na img, trxto será a resposta -> add display-none na setinha e remove dos botoes 


     return (
         <div className={ classeC }>
             {texto}
            <div className="container-card">
                 <div className="setinha"><img src={ setinha } /></div>

                 <div className="botoes-zap display-none">
                     <div className="nao-lembrei" onClick="addNoFooter()">Não lembrei</div>
                     <div className="quase-nao-lembrei" onClick="addNoFooter()">Quase não lembrei</div>
                     <div className="zap" onClick="addNoFooter()">Zap!</div>
                 </div>
             </div>
         </div>
     );
 }