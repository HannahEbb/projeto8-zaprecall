


export default function Footer() {

function addNoFooter() {
    let respondidas = 0;
    let footerIcons = []; // array com nome de cada ícone

    respondidas = respondidas +1;

    // if(condição de acordo com o botano clicado ->> key = index?) {
    
    //     footerIcons.push(icone relativo ao botao clicado)

    // }


}

    return (
        <div className="footer">
            {respondidas}/{total} CONCLUÍDOS
            <div className="footer-icons">
                {footerIcons.map(icon =><ion-icon name={icon}></ion-icon>)}
            </div>

        </div>

    );

}