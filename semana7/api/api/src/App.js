import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: ""
  };

  componentDidMount() {
    this.getUsers();
  };

  // componentDidUpdate(){
  //   this.getUsers();
  // }

  handleInputChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  handleInputChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "alexandra-alcantara-cruz"
        }
      }
    )
    .then((response) => {
      this.setState({ users: response.data });
      console.log(response.data);
      alert("Entrou!")
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  };

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "alexandra-alcantara-cruz"
          }
        }
      )
      .then((response) => {
        this.setState({ inputName: '' })
        this.setState({ inputEmail: '' })
        // this.getUsers()
        alert("O usuário foi inserido com sucesso!")
      })
      .catch((error) => {
        console.log(error.response.data)
      });
  };

  render() {
    const usersList = this.state.users.map((user) => {
      return <li key={user.id}>{user.name}</li>
    });
    return(
      <div>
        <button onClick={this.getUsers}>Ir para a página de lista</button>
        {this.state.users.length > 0 ? (
          <ul>{usersList}</ul>
        ) : (
          <p>Carregando...</p>
        )}
        <div>
          <label>Nome:</label>
            <input 
              placeholder={"Seu nome"}
              value={this.state.inputName}
              onChange={this.handleInputChangeName}
            />
        </div>
        <div>
            <label>E-mail:</label>
            <input 
              placeholder={"Seu email"}
              value={this.state.inputEmail}
              onChange={this.handleInputChangeEmail}
            />
        </div>
        <div>
            <button onClick={this.createUser}>Salvar</button>
        </div>
      </div>
    );
  };
};
