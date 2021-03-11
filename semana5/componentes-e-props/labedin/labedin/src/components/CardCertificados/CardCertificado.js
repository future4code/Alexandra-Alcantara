import React from 'react';
import './CardCertificados.css';

function CardCertificados(props) {
    return (
        <div className="cardcertificados-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.instituicao }</p>
                <p>Emitido em: { props.dataemissao }</p>
                <a href={ props.verificarcredencial } target="_blanc">Visualizar credencial</a>
            </div>
        </div>
    )
}

export default CardCertificados;