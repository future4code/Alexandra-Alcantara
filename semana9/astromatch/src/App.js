import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [profileList, setProfileList] = useState({});
  const [id, setId] = useState("")
  const [choice, setChoice] = useState(false)

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandra-alcantara-cruz/person";

  useEffect(() => {
    const getProfile = () => {
      axios
        .get(baseUrl)
        .then((res) => setProfileList(res.data.profile))
        .catch((err) => console.log(err));
    };
    getProfile();
  }, [setProfileList, baseUrl])

  const choosePerson = async () => {
    const body = {
      id: profileList.id,
      choice: (!choice)
    }
    const response = await axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandra-alcantara-cruz/choose-person", body)
      console.log(response)
  }



  return(
    <div>
      <p>Oi</p>
      <p>{profileList.name}</p>
      <img width="20%" src={profileList.photo}/>
      <p width="20%">{profileList.bio}</p>

      <button>Vá-se!</button>
      <button onClick={choosePerson}>Venha!</button>
      <br /> <br />
      <button>Clear</button>
      <hr />

    </div>
  )
}

export default App;