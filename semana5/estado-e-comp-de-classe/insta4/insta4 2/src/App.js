import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import ravioli from './img/ravioli.jpeg';
import raviolifolgada from './img/raviolifolgada.jpeg';
import miniale from './img/miniale.jpeg';
import bigale from './img/bigale.jpeg';


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
    ]
  } 
  
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
        {listaDePosts}
      </div>
    );
  }
}

export default App;
