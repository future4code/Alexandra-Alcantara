import React from 'react';
import './CardPequeno.css';

function CardPequeno (props) {
    return (
        <div className = 'smallcard-container'>
            <div>
                <p><span className="smallcard-span">Endereço:</span> {props.endereco}</p>
                <p><span className="smallcard-span">Email:</span> {props.email}</p>
            </div>
        </div>
    )
}

export default CardPequeno;