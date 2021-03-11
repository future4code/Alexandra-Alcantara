import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <a href= { props.link }>{ props.nome}</a>
        </div>

    )
}

export default ImagemButton;