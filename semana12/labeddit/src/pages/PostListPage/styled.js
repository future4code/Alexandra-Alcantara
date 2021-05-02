import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin-right: 20px;
  margin-top: 10px;
  color: #3d9690;
  font-size: 20px;

  @media only screen and (max-width: 380px) {
    margin-left: 6vw;
  }
`;

export const Text = styled.p`
  margin: 7px;
  margin-bottom: 15px;
  margin-right: 20px;
  text-align: justify;

  @media only screen and (max-width: 380px) {
    margin-left: 6vw;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 15%;
  justify-content: center;
  width: 60vw;

  @media only screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 88vw;
  }
`;

export const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.08);
  width: 3.5vw;
  min-width: 38px;
`;

export const VoteButtonUp = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: gray;
  font-size: 20px;
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
  font-size: 20px;

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

export const PostButton = styled.button`
  order: 2;
  background-color: #3d9690;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  height: 92%;
  align-self: center;
  margin-left: 10px;
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #43bab8;
    color: #ffffff;
    transition: all 0.5s ease 0s;
  }

  @media only screen and (max-width: 380px) {
    margin: 0 auto;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 8px 5px;
    width: 88vw;
  }
`;

export const FormTextContainer = styled.div`
  order: 3;

  @media only screen and (max-width: 380px) {
    display: flex;
    order: 2;
  }
`;

export const WelcomeText = styled.p`
  justify-self: flex-start;
  align-self: flex-start;
  color: #3d9690;
  font-size: 1.5em;
  margin: 25px 0 20px 0;
`;
