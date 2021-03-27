import './App.css';
import React from 'react';
import CreatePlaylistPage from "./pages/CreatePlaylistPage";
import ListPlaylistPage from "./pages/ListPlaylistPage";
import styled from "styled-components";

const TituloH1 = styled.h1`
  color: #d64c00;
  margin-top: 35px;
  font-size: 50px;
`;

export default class App extends React.Component {
  state = {
    goToPlaylist: false
  }

  changePage = () => {
    this.setState ({ goToPlaylist: !this.state.goToPlaylist })
  }

  render() {
    return (
      <div className="App">
        <TituloH1>Labefy</TituloH1>
        {this.state.goToPlaylist && <ListPlaylistPage 
          changePage={ this.changePage }/>}
        {!this.state.goToPlaylist && <CreatePlaylistPage 
          changePage={this.changePage}/>}
      </div>
    );
  }
}
