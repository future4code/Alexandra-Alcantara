import React, {useEffect, useState} from 'react';
import axios from  'axios';
import baseUrl from "../parameters";
import backicon from "../images/backicon.png";
import Header from "./Header";
import Clear from "./Clear";
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
            <Header 
                changePage={props.changePage}
                image={backicon} leftPosition={"15px"} widthIcon={"35px"}
                numPage={1}
            />
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