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

    createPlaylist = () => {
        const body = {
            name: this.state.name
        }

        axios.post(baseUrl, body, axiosConfig)
        .then((res) => {
         this.setState({ name: '' })
         console.log(res)
        })
        .catch((err) => {
         console.log(err)
        })
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