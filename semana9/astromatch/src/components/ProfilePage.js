import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../parameters";
import backicon from "../images/backicon.png";
import Header from "./Header";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

const ProfileName = styled.p`
  border-bottom: 1px solid lightgray;
  margin: 0 0 0 12px;
  display: flex;
  align-items: center;
  width: 342px;
`;

const ProfileCard = (props) => {
  const [profiles, setProfile] = useState([]);

  useEffect(() => {
    const getMatches = () => {
      axios
        .get(`${baseUrl}/matches`)
        .then((res) => setProfile(res.data.matches))
        .catch((err) => console.log(err));
    };
    getMatches();
  }, [profiles]);

  return (
    <div>
      <Header
        changePage={props.changePage}
        image={backicon}
        leftPosition={"15px"}
        widthIcon={"35px"}
        numPage={1}
      />
      {profiles.map((profile) => {
        return (
          <Grid
            templateColumns="12% 1fr"
            key={profile.id}
            padding="2px"
            margin="8px 0 0 12px"
          >
            <Box boxSize="100%">
              <Image
                src={profile.photo}
                alt={profile.name}
                boxSize="100%"
                height="52px"
                borderRadius="50%"
                objectFit="cover"
                filter="drop-shadow(0px 4px 9px gray)"
              />
            </Box>
            <ProfileName>{profile.name}</ProfileName>
          </Grid>
        );
      })}
    </div>
  );
};

export default ProfileCard;
