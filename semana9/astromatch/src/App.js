import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProfileCard from "./components/ProfileCard";
import MatchPage from "./components/MatchPage";

const App = () => {
  const [page, setPage] = useState(1)

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandra-alcantara-cruz/person";

  const clear = async () => {
    const response = await axios.put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandra-alcantara-cruz/clear")
      console.log(response)
  }

  const changePage = (numPage) => {
    setPage(numPage)
  }

  return(
    <div>
      {page === 1 && <MatchPage
      changePage={changePage}/>}
      {page === 2 && <ProfileCard
      changePage={changePage}/>}
      <br /> <br />
      <button onClick={clear}>Clear</button>
    </div>
  )
}

export default App;