import React from 'react';
import axios from 'axios';
import { UsersList } from './pages/UsersList';
import { UsersRegister } from './pages/UsersRegister'
import "./App.css";

export default class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: "",
    listUsers: false
  };

  //Lifecycle

  componentDidMount() {
    this.getUsers()
  };

  componentDidUpdate(){
    this.getUsers()
  };

  //onChange

  handleInputChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  handleInputChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  //Function

  changePage = ()=>{
    this.setState({
      listUsers: !this.state.listUsers
    })
  };

  //Requests

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
    })
    .catch((error) => {
      alert(error.response.data.message);
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
        alert("O usuário foi inserido com sucesso!")
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
  };

  deleteUser = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "alexandra-alcantara-cruz"
          }
        }
      )
      .then((response) => {
        alert("O usuário foi excluído com sucesso!")
      })
      .catch((error) => {
        alert("Ops! Algo saiu errado :(, tente novamente.")
      });
  };  

  render() {
    
    return(
      <div>
       {this.state.listUsers &&  <UsersList 
          users={this.state.users} 
          changePage={this.changePage}
          deleteUser={this.deleteUser}
        />}
        {!this.state.listUsers && (<UsersRegister 
          inputName={this.state.inputName} 
          inputEmail={this.state.inputEmail} 
          handleInputChangeName={this.handleInputChangeName}
          handleInputChangeEmail={this.handleInputChangeEmail}
          createUser={this.createUser}
          changePage={this.changePage}
        />)}
      </div>
    );
  };
};
