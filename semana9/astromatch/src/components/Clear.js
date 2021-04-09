import React from 'react';
import axios from 'axios';
import baseUrl from "../parameters";
import clearicon from "../images/clearicon.png";
import styled from "styled-components";

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

const Clear = () => {
    const clear = async () => {
        const response = await axios.put(
        `${baseUrl}/clear`)
        console.log(response)
    }

    return(
      <ClearButton src={clearicon} onClick={clear} />
    )
}

export default Clear;