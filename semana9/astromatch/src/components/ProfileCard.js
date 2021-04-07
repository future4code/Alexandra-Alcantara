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
    }, [setProfile])

    return(
        <div>
            {profiles.map((profile) => {
                return(
                    <div>
                        <p>Matches Page</p>
                        <p>{profile.name}</p>
                        <img width="20%" src={profile.photo} alt={profile.name}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ProfileCard;