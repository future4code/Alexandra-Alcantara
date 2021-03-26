import axios from 'axios';
import React from 'react';

export default class CreatePlaylistPage extends React.Component {
    state = {
        name: ''
    }

    handleName = (e) => {
        this.setState({ name: e.target.value })
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
                <button>Save</button>
            </div>
        )
    }
}