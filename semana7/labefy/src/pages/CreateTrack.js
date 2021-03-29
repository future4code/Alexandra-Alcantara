import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig } from "../parameters";
import styled from "styled-components";

const MainContainer = styled.div`
    background-color: #d64c00;
    border-radius: 10px;
    width: 40vw;
    height: 44vh;
    margin: 0 auto;
    padding: 6px;
    display: flex;
    flex-direction: column;
`;

const TrackContainer = styled.div`
    background-color: #f3e0c0;
    width: 33vw;
    height: 23vh;
    margin: 0 auto;
    padding: 8px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    color: #d64c00;
`;

const Labels = styled.label`
    text-align: right;
    margin-right: 8px;
    font-size: 20px;
`;

const SaveButton = styled.button`
    grid-column: 1 / 3;
    margin: 0 auto;
    background-color: #009f76;
    color: #FFFFFF;
    border: none;
    width: 5vw;
    height: 5.5vh;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
    box-shadow: 2px 2px 5px #705239;

    :hover {
        background-color: #4dc8a0;
    }
`;

const Inputs = styled.input`
    width: 25vw;
    margin: 2px;
    margin-right: 15px;
    align-self: baseline;
    border: 1px solid #d64c00;
    border-radius: 5px;
    padding: 6px;
`;

const HeaderAdd = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #FFFFFF;
    font-size: 25px;
`;

const BackButton = styled.button`
    background-color: #FFFFFF;
    color: #d64c00;
    border: none;
    width: 7vw;
    height: 9vh;
    border-radius: 10px;
    padding: 5px;
    font-size: 15px;
    cursor: pointer;

    :hover {
        background-color: #e76200;
        color: #FFFFFF;
        box-shadow: 2px 2px 5px #c78900;
    }
`;

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
            <MainContainer>
                <HeaderAdd>
                    <h2>Add Song</h2>
                    <BackButton onClick={()=>this.props.changePage(3)}>Go to my playlist</BackButton>
                </HeaderAdd>
                <TrackContainer>
                        <Labels>Name</Labels>
                        <Inputs
                        value={this.state.name}
                        onChange={this.handleName}
                        />
                        <Labels>Artist</Labels>
                        <Inputs 
                        value={this.state.artist}
                        onChange={this.handleArtist}
                        />
                        <Labels>URL</Labels>
                        <Inputs 
                        value={this.state.url}
                        onChange={this.handleUrl}
                        />
                    <SaveButton onClick={this.addTrack}>Save</SaveButton>
                </TrackContainer>
               
        </MainContainer>
        )
    }
}
