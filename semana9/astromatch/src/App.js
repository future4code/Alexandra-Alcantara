import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [profileList, setProfileList] = useState({});
  const [id, setId] = useState("")

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

  // const chooseProfile = (id) => {
  //   setChosenOne(id.id)
  //   console.log("entrei")
  // }

  // useEffect(() => {
  //   const makeChoice = () => {
  //     axios
  //       .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandra-alcantara-cruz/choose-person")
  //       .then((res) => setId(res.data))
  //       .catch((err) => console.log(err));
  //   };
  //   makeChoice();
  // }, [setId])

  return(
    <div>
      <p>Oi</p>
      <p>{profileList.name}</p>
      <img width="20%" src={profileList.photo}/>
      <p width="20%">{profileList.bio}</p>

      <button>Vá-se!</button>
      <button /*onClick={chooseProfile}*/>Venha!</button>
      <br /> <br />
      <button>Clear</button>
      <hr />

    </div>
  )
}

export default App;