import React, {useState} from 'react';
import ProfileCard from "./components/ProfilePage";
import MatchPage from "./components/MatchPage";
import { Box } from "@chakra-ui/react";

const App = () => {
  const [page, setPage] = useState(1)

  const changePage = (numPage) => {
    setPage(numPage)
  }

  return(
    <Box
      width= "410px"
      height= "590px"
      margin= "0 auto"
      border= "1px solid darkgray"
      marginTop= "15px"
      borderRadius="5px"
      overflow= "hidden"
    >
        {page === 1 && <MatchPage
        changePage={changePage}/>}
        {page === 2 && <ProfileCard
        changePage={changePage}/>}
    </Box>
  )
}

export default App;