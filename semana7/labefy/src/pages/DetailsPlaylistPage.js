import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig } from "../parameters";
import styled from "styled-components";

const MainContainer = styled.div`
    background-color: #d64c00;
    border-radius: 10px;
    width: 70vw;
    height: fit-content;
    margin: 0 auto;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const ContainerTracks = styled.div`
    background-color: #f3e0c0;
    width: 65vw;
    height: fit-content;
    margin: 0 auto;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 10px;
    align-items: center;
    color: #d64c00;
    display: flex;
    justify-content: space-evenly;
`;

const Audio = styled.audio`
    width: 12%;
    align-self: flex-end;
    margin-right: auto;
    margin-left: 20px;
`;

const PlaylistName = styled.h3`
    color: #FFFFFF;
    font-size: 30px;
`;

const RemoveButton = styled.button`
    border: none;
    color: #d64c00;
    background-color: #f3e0c0;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    margin-right: 30px;

    :hover {
        background-color: #FFFFFF;
        opacity: 0.7;
        color: #d64c00;
    }
`;

const TrackName = styled.p`
    margin-right: 0;
    margin-left: 30px;
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

const ButtonAddTrack = styled.button`
    background-color: #009f76;
    color: #FFFFFF;
    border: none;
    width: 7vw;
    height: 9vh;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
    box-shadow: 2px 2px 5px #705239;

    :hover {
        background-color: #4dc8a0;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export default class DetailsPlaylistPage extends React.Component {
    state = {
        tracks: [],
        playing: false
    }

    componentDidMount() {
        this.getTracks()
    }

    componentDidUpdate() {
        this.getTracks()
    }

    getTracks = async () => {
        try {
          const id = this.props.playlist.id 
          const res = await axios.get(`${baseUrl}/${id}/tracks`, axiosConfig)
          this.setState({ tracks: res.data.result.tracks })
        } catch(err) {
          console.log(err);
        }
    }

    deleteTracks = async (trackId) => {
        try {
          const id = this.props.playlist.id 
          const res = await axios.delete(`${baseUrl}/${id}/tracks/${trackId}`, axiosConfig)
          alert("Song successfully deleted!!")
        } catch(err)    {
          alert("Ops! Something got wrong, try again.")
        }
    }

    render() {
        return(
            <MainContainer>
                 <ButtonsContainer>
                    <ButtonAddTrack onClick={ ()=> this.props.changePage(4) }>Add Track</ButtonAddTrack>
                    <PlaylistName>{this.props.playlist.name}</PlaylistName>
                    <BackButton onClick={ ()=> this.props.changePage(2) }>Go to my playlist</BackButton>
                </ButtonsContainer>
                <div>
                {this.state.tracks.map((track) => {
                    return(
                        <ContainerTracks key={track.id}>
                            <TrackName>{track.name}</TrackName>
                            <Audio controls>
                                <source src={track.url} type="audio/mpeg" />
                            </Audio>
                            <RemoveButton onClick={() => this.deleteTracks(track.id)}>remove</RemoveButton>

                        </ContainerTracks>
                    )
                }
                )}
                </div>
            </MainContainer>
        )
    }
}
