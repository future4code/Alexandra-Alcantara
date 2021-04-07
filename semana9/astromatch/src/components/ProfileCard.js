import React, {useEffect, useState} from 'react';
import axios from  'axios';

const ProfileCard = (props) => {
    const [profiles, setProfile] = useState([])

    useEffect(() => {
        const getMatches = () => {
            axios
                .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandra-alcantara-cruz/matches")
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
                        <p>Matches Page</p>
                        <p>{profile.name}</p>
                        <img width="20%" src={profile.photo} alt={profile.name}/>
                    </div>
                )
            })}
            <button onClick={() => props.changePage(1)}>Home</button>
        </div>
    )
}

export default ProfileCard;