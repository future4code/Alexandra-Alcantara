import React from 'react';
import styled from 'styled-components';

const Texto = styled.p`
    color: #439099;
    text-shadow: 0.1em 0.1em 0.2em gray;
    font-size: x-large;
`
const Titulos = styled.h1`
    font-size: xx-large;
    color: #F5F4E8;
    text-shadow: 0.1em 0.1em 0.2em gray;
` 

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Titulos>O FORMULÁRIO ACABOU</Titulos>
                <Texto>Muito obrigada por participar!
                   Entraremos em contato!
                </Texto>
            </div>
        );
    };
};
