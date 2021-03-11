import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import ravioli from './img/ravioli.jpeg';
import raviolifolgada from './img/raviolifolgada.jpeg';
import miniale from './img/miniale.jpeg';
import bigale from './img/bigale.jpeg';


class App extends React.Component { // DECLARANDO UM COMPONENTE DE CLASSE
  render() {
    return (
      <div className={'app-container'}>
        <Post // COMPONENTE
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post // COMPONENTE
          nomeUsuario={'Ravioli'}
          fotoUsuario={ravioli}
          fotoPost={raviolifolgada}
        />    

        <Post // COMPONENTE
          nomeUsuario={'Alê'}
          fotoUsuario={bigale}
          fotoPost={miniale}
        />

      </div>
    );
  }
}

export default App;
