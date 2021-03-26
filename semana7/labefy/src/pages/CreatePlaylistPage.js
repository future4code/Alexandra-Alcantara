import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig } from "../parameters";

export default class CreatePlaylistPage extends React.Component {
    state = {
        name: ''
    }

    handleName = (e) => {
        this.setState({ name: e.target.value })
    }

    createPlaylist = async () => {
        try {
          const body = {
            name: this.state.name
          };

          const res = await axios.post(baseUrl, body, axiosConfig)
          this.setState({ name: '' })
          alert("Playlist criada com sucesso!")
        } catch(err) {
          alert("Ops! Saiu algo errado, tente novamente.")
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.props.changePage}>Go to my playlist</button>
                <h2>Create Playlist</h2>
                <label>Playlist Name</label>
                <input 
                 value={ this.state.name }
                 onChange={this.handleName} 
                />
                <button onClick={ this.createPlaylist }>Save</button>
            </div>
        )
    }
}