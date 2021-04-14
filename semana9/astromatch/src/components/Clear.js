import React from "react";
import axios from "axios";
import baseUrl from "../parameters";
import clearicon from "../images/clearicon.png";
import styled from "styled-components";
import { Tooltip } from "@chakra-ui/react";

const ClearButton = styled.img`
  width: 40px;
  cursor: pointer;
  position: relative;
  right: 10px;
  :hover {
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

const Clear = (props) => {
  const clear = async () => {
    const response = await axios.put(`${baseUrl}/clear`);
  };

  return (
    <Tooltip
      label="Reset"
      aria-label="A tooltip"
      backgroundColor="gray"
      padding="3px 4px 0 4px"
      borderRadius="8px"
    >
      <ClearButton
        src={clearicon}
        onClick={clear}
        bottomPosition={props.bottomPosition}
        leftPosition={props.leftPosition}
      />
    </Tooltip>
  );
};

export default Clear;
