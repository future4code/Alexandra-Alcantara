import axios from 'axios';
import React from 'react';
import { axiosConfig, baseUrl } from '../parameters';

export default class ListPlaylistPage extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getPlaylist()
    }
    
    getPlaylist = () => {
        axios.get(baseUrl, axiosConfig)
        .then((res) => {
            this.setState({ playlists: res.data.result.list })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    render() {
        return(
            <div>
                <button onClick={this.props.changePage}>Create a new playlist</button>
                <h2>Playlists</h2>
                {this.state.playlists.map((playlist) => {
                    return(
                        <div key={playlist.id}>
                            <p>{playlist.name}</p>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}