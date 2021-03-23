import React from 'react';
import styled from 'styled-components';

const Inputs = styled.input`
    border: none;
    border-radius: 20px;
    padding: 5px;
`
const Titulos = styled.h1`
    font-size: x-large;
    color: #F5F4E8;
    text-shadow: 0.1em 0.1em 0.2em gray;
`
const TextoForm = styled.form`
    color: #373737;
    font-size: large;
`
export default class PerguntaAberta extends React.Component {
    render() {
        return(
            <TextoForm>
                <p>{this.props.pergunta}</p>
                <Inputs type="text" name="nome" required>{this.props.input}</Inputs>
            </TextoForm>
        );
    };
};
