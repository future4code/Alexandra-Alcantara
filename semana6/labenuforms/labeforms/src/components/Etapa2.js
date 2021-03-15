import React from 'react';
import styled from 'styled-components';

const Inputs = styled.input`
    border: none;
    border-radius: 20px;
    padding: 5px;
`
const TextoForm = styled.form`
    color: #373737;
    font-size: large;
`
const Titulos = styled.h1`
    font-size: x-large;
    color: #F5F4E8;
    text-shadow: 0.1em 0.1em 0.2em gray;
` 

export default class App extends React.Component {
    render() {
        return(
            <TextoForm>
                <Titulos>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulos>
                <p>5. Qual o curso?</p>
                <Inputs type="text" name="curso" required></Inputs>

                <p>6. Qual a unidade de ensino?</p>
                <Inputs type="text" name="unidade-de-ensino" required></Inputs>
            </TextoForm>
        );
    };
};
