import React, {useEffect, useState} from 'react';
import axios from  'axios';
import baseUrl from "../parameters"
import styled from "styled-components";
import Header from "./Header";
import backicon from "../images/backicon.png";

const Img = styled.img`
    cursor: pointer;
    position: relative;
    bottom: 40px;
    left: 8px;
    width: 30px;
    :hover {
        transform: scale(1.05);
        transition: all 0.3s ease 0s;
    }
`;

const ProfileImg = styled.img`
    width: 10%;
    border-radius: 50%;
`;

const ProfileCard = (props) => {
    const [profiles, setProfile] = useState([])

    useEffect(() => {
        const getMatches = () => {
            axios
                .get(`${baseUrl}/matches`)
                .then((res) => setProfile(res.data.matches))
                .catch((err) => console.log(err));
        };
        getMatches();
    }, [profiles])

    return(
        <div>
            <Header 
                changePage={props.changePage}
            />
            <Img src={backicon} onClick={() => props.changePage(1)} />

            {profiles.map((profile) => {
                return(
                    <div key={profile.id}>
                        <ProfileImg src={profile.photo} alt={profile.name}/>
                        <p>{profile.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProfileCard;