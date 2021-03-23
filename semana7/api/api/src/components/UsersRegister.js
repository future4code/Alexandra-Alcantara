import React from 'react';
import styled from "styled-components";

export class UsersRegister extends React.Component {
    render() {
        return(
            <div>
                <div>
                <label>Nome:</label>
                <input 
                    placeholder={"Seu nome"}
                    value={this.props.inputName}
                    onChange={this.props.handleInputChangeName}
                />
            </div>
            <div>
                <label>E-mail:</label>
                <input 
                    placeholder={"Seu email"}
                    value={this.props.inputEmail}
                    onChange={this.props.handleInputChangeEmail}
                />
            </div>
            <div>
                <button onClick={this.props.createUser}>Salvar</button>
                <button onClick={this.props.changePage}>Listar Usuários</button>
            </div>
          </div>
        )
    }

}