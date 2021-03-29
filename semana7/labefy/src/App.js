import './App.css';
import React from 'react';
import CreatePlaylistPage from "./pages/CreatePlaylistPage";
import ListPlaylistPage from "./pages/ListPlaylistPage";
import DetailsPlaylistPage from "./pages/DetailsPlaylistPage";
import CreateTrack from "./pages/CreateTrack";
import styled from "styled-components";

const TituloH1 = styled.h1`
  color: #d64c00;
  margin-top: 35px;
  font-size: 60px;
`;

export default class App extends React.Component {
  state = {
    page: 1,
    playlist: {}
  }

  changePage = (pageName) => {
    this.setState({ page: pageName})
  }

  showDetails = (pageName, playlist) => {
    this.setState({ page: pageName, playlist: playlist })
  }

  render() {
    return (
      <div className="App">
        <TituloH1>Labefy</TituloH1>
        {this.state.page === 1 && <CreatePlaylistPage 
          changePage={this.changePage}/>}
        {this.state.page === 2 && <ListPlaylistPage 
          changePage={this.changePage}
          showDetails={this.showDetails} />}
        {this.state.page === 3 && <DetailsPlaylistPage 
          changePage={this.changePage}
          showDetails={this.showDetails}
          playlist ={this.state.playlist}/>}
        {this.state.page === 4 && <CreateTrack 
          id={this.state.playlist.id}
          changePage={this.changePage}/>}
     </div>
    );
  }
}
