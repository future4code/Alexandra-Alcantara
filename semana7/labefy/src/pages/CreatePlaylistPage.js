import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig } from "../parameters";
import styled from "styled-components";

const Button = styled.button`
    background-color: #705239;
`;

const MainContainer = styled.div`
    background-color: #d64c00;
    border-radius: 10px;
    width: 40vw;
    height: 150px;
    margin: 0 auto;
    padding: 2px;
    display: flex;
    flex-direction: column;
`;

const PlaylistContainer = styled.div`
    background-color: #f3e0c0;
    width: 37vw;
    height: 19vh;
    margin: 0 auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #d64c00;
`;

const Input = styled.input`
    width: 15vw;
`;

const HeaderCreate = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #FFFFFF;
`;

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
            <MainContainer>
                <HeaderCreate>
                    <h2>Create Playlist</h2>
                    <Button onClick={this.props.changePage}>Go to my playlist</Button>
                </HeaderCreate>
                <PlaylistContainer>
                    <label>Playlist Name</label>
                    <Input 
                    value={ this.state.name }
                    onChange={this.handleName} 
                    />
                    <button onClick={ this.createPlaylist }>Save</button>
                </PlaylistContainer>
            </MainContainer>
        )
    }
}