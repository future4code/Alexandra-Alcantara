import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig } from "../parameters";
import styled from "styled-components";

const ButtonGoToPlaylist = styled.button`
    background-color: #FFFFFF;
    color: #d64c00;
    border: none;
    width: 8vw;
    border-radius: 10px;
    padding: 3px;
    font-size: 10.5px;
    cursor: pointer;

    :hover {
        background-color: #e76200;
        color: #FFFFFF;
        box-shadow: 2px 2px 5px #c78900;
    }
`;

const ButtonSave = styled.button`
    background-color: #009f76;
    color: #FFFFFF;
    border: none;
    height: 50%;
    width: 40%;
    border-radius: 50%;
    grid-column-start: 2;
    grid-row: 1 / 3;
    margin: 0 auto;
    box-shadow: 2px 2px 5px #705239;
    cursor: pointer;

    :hover {
        background-color: #4dc8a0;
    }
`;

const MainContainer = styled.div`
    background-color: #d64c00;
    border-radius: 10px;
    width: 40vw;
    height: 40vh;
    margin: 0 auto;
    padding: 6px;
    display: flex;
    flex-direction: column;
`;

const PlaylistContainer = styled.div`
    background-color: #f3e0c0;
    width: 37vw;
    height: 19vh;
    margin: 0 auto;
    padding: 5px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-evenly;
    align-items: center;
    color: #d64c00;
`;

const Input = styled.input`
    width: 16vw;
    margin: 0 auto;
    align-self: baseline;
    border: 1px solid #d64c00;
    border-radius: 5px;
    padding: 2px;
`;

const HeaderCreate = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #FFFFFF;
`;

const PlaylistName = styled.label`
    font-size: 20px;
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
                    <ButtonGoToPlaylist onClick={this.props.changePage}>Go to my playlist</ButtonGoToPlaylist>
                </HeaderCreate>
                <PlaylistContainer>
                    <PlaylistName>Playlist Name</PlaylistName>
                    <Input 
                    value={ this.state.name }
                    onChange={this.handleName} 
                    />
                    <ButtonSave onClick={ this.createPlaylist }>Save</ButtonSave>
                </PlaylistContainer>
            </MainContainer>
        )
    }
}