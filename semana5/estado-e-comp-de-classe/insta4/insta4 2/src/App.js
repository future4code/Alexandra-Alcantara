import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import ravioli from './img/ravioli.jpeg';
import raviolifolgada from './img/raviolifolgada.jpeg';
import miniale from './img/miniale.jpeg';
import bigale from './img/bigale.jpeg';
import styled from "styled-components"

const FormularioDoPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

const InputsDoFormulario = styled.input`
  margin: 1px;
  border-radius: 50px;
  border: 1px solid #626262;
  padding: 4px;
`;

const BotaoFormulario = styled.button`
  background-color: #000080;
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  padding: 4px 8px;
`;

class App extends React.Component { // DECLARANDO UM COMPONENTE DE CLASSE
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Ravioli',
        fotoUsuario: ravioli,
        fotoPost: raviolifolgada
      },
      {
        nomeUsuario: 'Alê',
        fotoUsuario: bigale,
        fotoPost: miniale
      }
    ],
    valorInputFoto: "",
    valorInputNome: "",
    valorInputPost: ""
  } 

  adicionaPost = () => {
    const novoPost = {
      fotoUsuario: this.state.valorInputFoto,
      nomeUsuario: this.state.valorInputNome,
      fotoPost: this.state.valorInputPost
    };

    const novaLista = [...this.state.posts, novoPost];

    this.setState ({
      posts: novaLista,
      valorInputFoto: "",
      valorInputNome: "",
      valorInputPost: ""
    });
  };
  
  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post // COMPONENTE
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    
    return (
      <div className={'app-container'}>
      <FormularioDoPost>
        <InputsDoFormulario
          value={this.state.valorInputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={"Foto do Perfil"}/>

        <InputsDoFormulario
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome do Usuário"}/>

        <InputsDoFormulario
          value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"Post"}/>

        <BotaoFormulario onClick={this.adicionaPost}>Adicionar</BotaoFormulario>
      </FormularioDoPost>
        {listaDePosts}
      </div>
    );
  }
}

export default App;
