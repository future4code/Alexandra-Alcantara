import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin: 7px;
  margin-right: 20px;
  margin-top: 10px;
  color: #3d9690;
  font-size: 20px;
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
  display: grid;
  grid-template-columns: 50% 10%;
  justify-content: center;
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
`;

export const FormTextContainer = styled.div`
  order: 3;
`;

export const PostingButton = styled.button`
  border: none;
  background-color: #3d9690;
  font-size: 20px;
  color: #ffffff;
  border-radius: 5px;
  padding: 8px;
  margin-right: 400px;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    background-color: #43bab8;
    color: #ffffff;
    transition: all 0.5s ease 0s;
  }
  margin-left: 270px;
  width: 59.4vw;
`;
