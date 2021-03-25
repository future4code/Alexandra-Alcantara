import React from 'react';
import axios from 'axios';
import { UsersList } from './pages/UsersList';
import { UsersRegister } from './pages/UsersRegister'
import "./App.css";
import { baseUrl,axiosConfig } from './parameters';

export default class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: "",
    listUsers: false
  };

  componentDidMount() {
    this.getUsers()
  };

  componentDidUpdate(){
    this.getUsers()
  };

  handleInputChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  handleInputChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  changePage = ()=>{
    this.setState({
      listUsers: !this.state.listUsers
    })
  };

  getUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig)
      this.setState({ users: response.data })
    } catch(error)  {
      alert(error.response.data.message);
      }
  };

  createUser = async () => {
    try {
      const body = {
        name: this.state.inputName,
        email: this.state.inputEmail
      };
  
      const response = await axios.post(baseUrl, body, axiosConfig)
      this.setState({ inputName: '' })
      this.setState({ inputEmail: '' })
      alert("O usuário foi inserido com sucesso!")
    } catch(error) {
      alert(error.response.data.message)
      }
  };

  deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`, axiosConfig)
      alert("O usuário foi excluído com sucesso!")
    } catch(error) {
      alert("Ops! Algo saiu errado :(, tente novamente.")
      }
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
