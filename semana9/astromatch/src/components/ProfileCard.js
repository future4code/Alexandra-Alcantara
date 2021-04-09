import React, {useEffect, useState} from 'react';
import axios from  'axios';
import baseUrl from "../parameters"
import styled from "styled-components";

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
            {profiles.map((profile) => {
                return(
                    <div key={profile.id}>
                        <ProfileImg src={profile.photo} alt={profile.name}/>
                        <p>{profile.name}</p>
                    </div>
                )
            })}
            <button onClick={() => props.changePage(1)}>Home</button>
        </div>
    )
}

export default ProfileCard;