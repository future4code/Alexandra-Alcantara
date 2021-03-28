import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig } from "../parameters";


export default class CreatePlaylistPage extends React.Component {
    state = {
        name: '',
        artist: '',
        url: '',
    }

    handleName = (e) => {
        this.setState({ name: e.target.value })
    }
    
    handleArtist = (e) => {
        this.setState({ artist: e.target.value })
    }
    
    handleUrl = (e) => {
        this.setState({ url: e.target.value })
    }
    
    addTrack = async () => {
        try {
          const id =this.props.id
          const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
          };
    
          const res = await axios.post(`${baseUrl}/${id}/tracks`, body, axiosConfig)
          this.setState({ name: '', artist: '', url: '' })
          alert("Song successfully added!")
        } catch(err) {
          alert("Ops! Something got wrong, try again.")
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Add Track</h2>
                    <button onClick={()=>this.props.changePage(3)}>Back</button>
                </div>
                <div>
                    <label>Song Name</label>
                    <input
                     value={this.state.name}
                     onChange={this.handleName}/>
                    <label>Artist</label>
                    <input 
                     value={this.state.artist}
                     onChange={this.handleArtist}
                    />
                    <label>URL</label>
                    <input 
                     value={this.state.url}
                     onChange={this.handleUrl}
                    />
                    <button onClick={this.addTrack}>Save</button>

                </div>
               
            </div>
        )
    }
}
