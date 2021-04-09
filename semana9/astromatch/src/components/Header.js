import React from 'react';
import astroname from "../images/astroname.png";
import styled from "styled-components";
import Clear from "./Clear";

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

const Img = styled.img`
    cursor: pointer;
    position: relative;
    left: ${props => props.leftPosition || "15px"};
    width: ${props => props.widthIcon || "40px"};
    :hover {
        transform: scale(1.05);
        transition: all 0.3s ease 0s;
    }
`;

const Header = (props) => {
    const {image, changePage, numPage, leftPosition, widthIcon} = props

    return(
        <div>
            <HeaderContainer>
                <Titulo src={astroname} />
                <Img 
                    src={image} 
                    onClick={() => changePage(numPage)} 
                    leftPosition={leftPosition}
                    widthIcon={widthIcon}
                />
                <Clear />
            </HeaderContainer>
        </div>
    )
}

export default Header;