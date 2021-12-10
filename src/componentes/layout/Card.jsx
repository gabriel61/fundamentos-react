import React from "react";
import './Card.css'

//exportando uma propriedade 
export default props =>
    //classe de nome Card com um style para a borda do card
    //cor da borda em props.color declarado em app.jsx
    //caso não tenha nenhuma cor declarada entao fica #000
    <div className="Card" style={{
        borderColor: props.color || '#000'
    }}>
        {/* classe para o Conteudo do Card, o qual receberá as 
        propriedades do filho */}
        <div className="Content">
            {props.children}
        </div>
        {/* classe para o Rodapé com um style para o backg */}
        <div className="Footer" style={{
            backgroundColor: props.color || '#000'
        }}>
            {/* Titulo do Card */}
            {props.titulo}
        </div>
    </div>