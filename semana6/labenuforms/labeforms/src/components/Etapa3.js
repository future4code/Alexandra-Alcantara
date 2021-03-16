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

export default class App extends React.Component {
    render() {
        return( 
            <TextoForm>
                <Titulos>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulos>
                <PerguntaAberta pergunta={"7. Por que você não terminou um curso de graduação?"}/>
                <PerguntaOpcoes 
                    pergunta={"8. Você fez algum curso complementar?"}
                    opcoes1={"Nenhum"}
                    opcoes2={"Curso técnico"}
                    opcoes3={"Curso de inglês"}
                /> 
            </TextoForm>
            
            // <TextoForm>
            //     <Titulos>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulos>
            //     <p>7. Por que você não terminou um curso de graduação?</p>
            //     <Inputs type="text" name="nome" required></Inputs>

            //     <p>8. Você fez algum curso complementar?</p>
            //     <Select>
            //         <option>Nenhum</option>
            //         <option>Curso técnico</option>
            //         <option>Curso de inglês</option>
            //     </Select>
            // </TextoForm>
        );
    };
};
