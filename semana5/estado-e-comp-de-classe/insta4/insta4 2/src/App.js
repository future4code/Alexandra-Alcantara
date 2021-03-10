import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component { // DECLARANDO UM COMPONENTE DE CLASSE
  render() {
    return (
      <div className={'app-container'}>
        <Post // COMPONENTE
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </div>
    );
  }
}

export default App;
