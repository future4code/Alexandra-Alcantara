import styled from "styled-components";

export const Comma = styled.p`
  margin: 0 4px 0 2px;
  font-weight: bold;
  font-size: 28px;
  text-shadow: 2px 2px 2.5px gray;
  font-family: "Cormorant Garamond", serif;
`;

export const HeartButton = styled.button`
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

export const XButton = styled.button`
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

export const Name = styled.p`
  font-weight: bold;
  font-size: 30px;
  text-shadow: 2px 2px 2.5px gray;
  font-family: "Cormorant Garamond", serif;
`;

export const Age = styled.p`
  font-size: 24px;
  display: flex;
  align-self: center;
  text-shadow: 2px 2px 2.5px gray;
  font-family: "Cormorant Garamond", serif;
`;

export const Bio = styled.p`
  width: 330px;
`;
