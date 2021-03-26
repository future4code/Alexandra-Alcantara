import './App.css';
import React from 'react';
import CreatePlaylistPage from "./pages/CreatePlaylistPage";
import ListPlaylistPage from "./pages/ListPlaylistPage";

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
        <h1>Labefy</h1>
        {this.state.goToPlaylist && <ListPlaylistPage 
          changePage={ this.changePage }/>}
        {!this.state.goToPlaylist && <CreatePlaylistPage 
          changePage={this.changePage}/>}
      </div>
    );
  }
}
