import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import matches from "../images/matches-icon.png";
import astroname from "../images/astroname.png";
import styled from "styled-components";

const Img = styled.img`
    cursor: pointer;
    position: relative;
    left: 355px;
    :hover {
        transform: scale(1.05);
        transition: all 0.3s ease 0s;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    height: 50px;
`;

const Titulo = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const Header = (props) => {
    return(
        <div>
            <HeaderContainer>
                <Titulo src={astroname} />
                <Img src={matches} onClick={() => props.changePage(2)} />
            </HeaderContainer>
        </div>
    )
}

export default Header;