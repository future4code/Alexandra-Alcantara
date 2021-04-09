import React, {useState} from 'react';
import axios from 'axios';
import ProfileCard from "./components/ProfileCard";
import MatchPage from "./components/MatchPage";
import baseUrl from "./parameters";
import Header from "./components/Header";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import clearicon from "./images/clearicon.png";
import { Tooltip } from "@chakra-ui/react";

const ClearButton = styled.img`
  width: 35px;
  cursor: pointer;
  position: relative;
  bottom: 193px;
  left: 4px;

  :hover {
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

const App = () => {
  const [page, setPage] = useState(1)

  const clear = async () => {
    const response = await axios.put(
      `${baseUrl}/clear`)
      console.log(response)
  }

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
      overflowY= "hidden"
    >
      <Header 
      changePage={changePage}/>
        {page === 1 && <MatchPage
        changePage={changePage}/>}
        {page === 2 && <ProfileCard
        changePage={changePage}/>}
        <Tooltip 
          label="Limpar swipes e matches" 
          aria-label="A tooltip"
          backgroundColor= "lightgray"
          padding="4px"
          borderRadius="8px">
          <ClearButton src={clearicon} onClick={clear} />
        </Tooltip>
    </Box>
  )
}

export default App;