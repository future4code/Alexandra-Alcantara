import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MatchPage = (props) => {
    const [profileList, setProfileList] = useState({});
    const [isMatch, setIsMatch] = useState()
    const [choice, setChoice] = useState(true)

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandra-alcantara-cruz/person";

    useEffect(() => {
        const getProfile = () => {
          axios
            .get(baseUrl)
            .then((res) => setProfileList(res.data.profile))
            .catch((err) => console.log(err));
        };
        getProfile();
      }, [isMatch, baseUrl])

    const choosePerson = async () => {
        const body = {
            id: profileList.id,
            choice: choice
        }
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandra-alcantara-cruz/choose-person", body)
            console.log(response)
            setIsMatch(response.data)
            setChoice(choice)
    }

    return(
        <div>
            <p>{profileList.name}</p>
            <img width="20%" src={profileList.photo}/>
            <p width="20%">{profileList.bio}</p>
            <button onClick={() => props.changePage(2)}>Vá para matches</button>
            <button onClick={() => choosePerson(true)}>Venha!</button>
            <button onClick={() => choosePerson(false)}>Vá-se!</button>
        </div>
    )
}

export default MatchPage;