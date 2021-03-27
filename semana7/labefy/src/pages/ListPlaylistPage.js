import axios from 'axios';
import React from 'react';
import { axiosConfig, baseUrl } from '../parameters';
import styled from "styled-components";

const MainContainer = styled.div`
    background-color: #d64c00;
    border-radius: 10px;
    width: 40vw;
    height: fit-content;
    margin: 0 auto;
    padding: 6px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    color: #FFFFFF;
`;

const HeaderCreate = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #FFFFFF;
`;

const ButtonCreatePlaylist = styled.button`
    background-color: #FFFFFF;
    color: #d64c00;
    border: none;
    width: 8vw;
    border-radius: 10px;
    padding: 3px;
    font-size: 10.5px;
    cursor: pointer;
    padding: 5px;

    :hover {
        background-color: #e76200;
        color: #FFFFFF;
        box-shadow: 2px 2px 5px #c78900;
    }
`;

const PlaylistList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #FFFFFF;
`;

const PlaylistNames = styled.p`
    margin: 5px;
    padding: 3px;
`;

const ButtonRemove = styled.button`
    border: none;
    color: #FFFFFF;
    background-color: #d64c00;
    font-size: 10px;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px; 

    :hover {
        background-color: #FFFFFF;
        color: #d64c00;
    }
`

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
            <MainContainer>
                <HeaderCreate>
                    <h2>Playlists</h2>
                    <ButtonCreatePlaylist onClick={this.props.changePage}>Create a new playlist</ButtonCreatePlaylist>
                </HeaderCreate>
                {this.state.playlists.map((playlist) => {
                    return(
                        <PlaylistList key={playlist.id}>
                            <PlaylistNames>{playlist.name}</PlaylistNames>
                            <ButtonRemove onClick={() => this.deletePlaylist(playlist.id)}>remove</ButtonRemove>
                        </PlaylistList>
                    )
                }
                )}
            </MainContainer>
        )
    }
}