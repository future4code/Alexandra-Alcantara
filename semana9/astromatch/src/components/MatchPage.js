import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../parameters";
import matches from "../images/matches-icon.png";
import Header from "./Header";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const Comma = styled.p`
  margin-right: 4px;
  font-weight: bold;
  font-size: 24px;
`;

const YeahButton = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 1px solid darkgreen;
  background-color: #ffffff;
  color: darkgreen;
  cursor: pointer;
  font-weight: bold;
  z-index: 2;
  :hover {
    border: none;
    background-color: darkgreen;
    color: #ffffff;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

const NahButton = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 1px solid #ff0000;
  background-color: #ffffff;
  color: #ff0000;
  cursor: pointer;
  font-weight: bold;
  :hover {
    border: none;
    background-color: #ff0000;
    color: #ffffff;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 2.5px gray;
`;

const Age = styled.p`
  font-size: 21px;
  display: flex;
  align-self: center;
`;

const MatchPage = (props) => {
  const [profileList, setProfileList] = useState({});
  const [isMatch, setIsMatch] = useState();

  useEffect(() => {
    const getProfile = () => {
      axios
        .get(`${baseUrl}/person`)
        .then((res) => setProfileList(res.data.profile))
        .catch((err) => console.log(err));
    };
    getProfile();
  }, [isMatch, baseUrl]);

  const choosePerson = async (userChoice) => {
    const body = {
      id: profileList.id,
      choice: userChoice,
    };
    const response = await axios.post(`${baseUrl}/choose-person`, body);
    console.log(response);
    setIsMatch(response.data);
  };

  return (
    <div>
      <Header changePage={props.changePage} image={matches} numPage={2} />
      <Box>
        <Image
          src={profileList.photo}
          alt={profileList.name}
          boxSize="100%"
          padding="15px"
          borderRadius="20px"
          objectFit="cover"
          height="448px"
          filter="drop-shadow(0px 4px 9px gray)"
        />
      </Box>
      <Box
        borderRadius="5px"
        marginLeft="15px"
        marginTop="50px"
        width="378px"
        paddingLeft="20px"
        position="relative"
        bottom="200px"
        color="#FFFFFF"
        height="132px"
        backgroundImage="linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)"
      >
        <Flex>
          <Name>{profileList.name}</Name>
          <Comma>,</Comma>
          <Age>{profileList.age}</Age>
        </Flex>
        <Flex position="relative" bottom="22px">
          <p>{profileList.bio}</p>
        </Flex>
      </Box>
      <Flex justifyContent="space-evenly" position="relative" bottom="180px">
        <NahButton onClick={() => choosePerson(false)}>Oh No</NahButton>
        <YeahButton onClick={() => choosePerson(true)}>Oh Yeah</YeahButton>
      </Flex>
    </div>
  );
};

export default MatchPage;
