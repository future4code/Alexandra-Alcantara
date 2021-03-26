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

    componentDidUpdate() {
        this.getPlaylist()
    }
    
    getPlaylist = async () => {
        try {
          const res = await axios.get(baseUrl, axiosConfig)
          this.setState({ playlists: res.data.result.list })
        } catch(err) {
          console.log(err);
        }
    }

    deletePlaylist = async (id) => {
        try {
          const res = await axios.delete(`${baseUrl}/${id}`, axiosConfig)
          alert("A playlist foi excluída com sucesso!")
        } catch(err)    {
          alert("Ops! Algo saiu errado, tente novamente.")
        }
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
                            <button onClick={() => this.deletePlaylist(playlist.id)}>x</button>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}