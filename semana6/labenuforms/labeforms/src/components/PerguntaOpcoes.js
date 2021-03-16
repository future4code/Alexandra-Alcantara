import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';

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
const Select = styled.select`
    border: none;
    border-radius: 20px;
    padding: 5px;
    background-color: #FFFFFF;
`
const TextoForm = styled.form`
    color: #373737;
    font-size: large;
`
export default class PerguntaOpcoes extends React.Component {
    render() {
        return(
            <TextoForm>
                <p>{this.props.pergunta}</p>
                <Select>
                    <option>{this.props.opcoes1}</option>
                    <option>{this.props.opcoes2}</option>
                    <option>{this.props.opcoes3}</option>
                    <option>{this.props.opcoes4}</option>
                </Select>
            </TextoForm>
        );
    };
};
