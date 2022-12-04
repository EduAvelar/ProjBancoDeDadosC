import React from "react";

//o parametro props é a propriedade de que vem do arquivo App
//dentro do return, pela tag html que esta sendo usada, temos que por as chaves entre o 'props.title' para que ele identifique o que esta vindo do App
function BodyPage(props) {
    return(
        // <h5>Pagina de Anotações de lembretes/notas usando MongoDB</h5>
        <h4>{props.title}</h4>
    )
}

export default BodyPage