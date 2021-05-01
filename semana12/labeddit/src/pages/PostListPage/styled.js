import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin: 7px;
  margin-right: 8px;
  font-size: 1.5em;
  color: #3d9690;
`;

export const Text = styled.p`
  margin: 7px;
  margin-bottom: 15px;
  margin-right: 20px;
  text-align: justify;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.08);
`;

export const VoteButtonUp = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: gray;
  :hover {
    background-color: #15b39f;
    border-radius: 50%;
    color: #ffffff;
    transform: scale(0.8);
    transition: all 0.5s ease 0s;
  }
`;

export const VoteButtonDown = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: gray;
  :hover {
    background-color: #ff0000;
    border-radius: 50%;
    color: #ffffff;
    transform: scale(0.8);
    transition: all 0.5s ease 0s;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 3vw 1fr;
`;

export const Line = styled.hr`
  margin: 0;
`;

export const Username = styled.p`
  font-size: 12px;
  background-color: #3d9690;
  margin: 0;
  padding: 5px;
  border-radius: 4px 4px 0 0;
`;

export const UsernameContainer = styled.div`
  color: #ffffff;
`;
