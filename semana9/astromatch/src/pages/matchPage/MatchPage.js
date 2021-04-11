import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../parameters";
import matches from "../../images/matches-icon.png";
import Header from "../../components/Header";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Comma = styled.p`
  margin: 0 4px 0 2px;
  font-weight: bold;
  font-size: 28px;
  text-shadow: 2px 2px 2.5px gray;
  font-family: "Cormorant Garamond", serif;
`;

const HeartButton = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  color: #15b39f;
  cursor: pointer;
  z-index: 2;
  :hover {
    background-color: #15b39f;
    color: #ffffff;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

const XButton = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  color: #ff0000;
  cursor: pointer;
  :hover {
    background-color: #ff0000;
    color: #ffffff;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 30px;
  text-shadow: 2px 2px 2.5px gray;
  font-family: "Cormorant Garamond", serif;
`;

const Age = styled.p`
  font-size: 24px;
  display: flex;
  align-self: center;
  text-shadow: 2px 2px 2.5px gray;
  font-family: "Cormorant Garamond", serif;
`;

const Bio = styled.p`
  width: 330px;
`;

const MatchPage = (props) => {
  const [profileList, setProfileList] = useState({});
  const [isMatch, setIsMatch] = useState({});
  const toast = useToast();

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
    setIsMatch(response.data);

    if (response.data.isMatch) {
      toast({
        position: "bottom",
        duration: "1500",
        variant: "left-accent",
        render: () => (
          <Box
            textAlign="center"
            color="white"
            p={3}
            bg="red.500"
            borderRadius="15px"
            variant="subtle"
          >
            <Box fontWeight="bold">It's a match!</Box>
            <Box>Agora vocês já podem conversar!</Box>
          </Box>
        ),
      });
    }
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
        bottom="197px"
        color="#FFFFFF"
        height="132px"
        backgroundImage="linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)"
      >
        <Flex>
          <Name>{profileList.name}</Name>
          <Comma>,</Comma>
          <Age>{profileList.age}</Age>
        </Flex>
        <Flex>
          <Bio>{profileList.bio}</Bio>
        </Flex>
      </Box>
      <Flex justifyContent="space-evenly" position="relative" bottom="180px">
        <XButton onClick={() => choosePerson(false)}>
          <FontAwesomeIcon size="3x" icon={faTimesCircle} />
        </XButton>
        <HeartButton onClick={() => choosePerson(true)}>
          <FontAwesomeIcon size="3x" icon={faHeart} />
        </HeartButton>
      </Flex>
    </div>
  );
};

export default MatchPage;
