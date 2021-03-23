import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';

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
export default class Etapa1 extends React.Component {
    render() {
        return(
            <TextoForm>
                <Titulos>Etapa 1 - DADOS GERAIS</Titulos>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"}/>
                <PerguntaAberta pergunta={"2. Qual a sua idade?"}/>
                <PerguntaAberta pergunta={"3. Qual o seu email?"}/>
                <PerguntaOpcoes 
                    pergunta={"4. Qual a sua escolaridade?"}
                    opcoes1={"Ensino médio incompleto"}
                    opcoes2={"Ensino médio completo"}
                    opcoes3={"Ensino superior incompleto"}
                    opcoes4={"Ensino superior completo"}
                /> 
            </TextoForm>

            // <TextoForm>
            //    <Titulos>Etapa 1 - DADOS GERAIS</Titulos>
            //    <p>1. Qual o seu nome?</p>
            //    <Inputs type="text" name="nome" required></Inputs>

            //    <p>2. Qual a sua idade?</p>
            //    <Inputs type="number" name="idade" required></Inputs>

            //    <p>3. Qual o seu email?</p>
            //    <Inputs type="email" name="email" required></Inputs>

            //    <p>4. Qual a sua escolaridade?</p>
            //    <Select>
            //        <option>Ensino médio incompleto</option>
            //        <option>Ensino médio completo</option>
            //        <option>Ensino superior incompleto</option>
            //        <option>Ensino superior completo</option>
            //    </Select>
            // </TextoForm>
        );
    };
};
