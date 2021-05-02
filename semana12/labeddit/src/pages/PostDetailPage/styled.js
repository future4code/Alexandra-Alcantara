import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  justify-content: center;
  width: 60vw;
  padding: 3px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 59vw;
  justify-content: start;
`;

export const VoteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.08);
`;

export const UsernameContainer = styled.div`
  color: #ffffff;
`;

export const Username = styled.p`
  font-size: 12px;
  background-color: #3d9690;
  margin: 0;
  padding: 5px;
  border-radius: 4px 4px 0 0;
`;

export const VoteButtonUp = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 50%;

  cursor: pointer;
  color: gray;
  font-size: 15px;
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
  border-radius: 50%;

  cursor: pointer;
  color: gray;
  font-size: 15px;

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

export const ScreenContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const CommentButton = styled.button`
  order: 2;
  background-color: #3d9690;
  color: #ffffff;
  margin-left: 3px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  cursor: pointer;
  height: 94%;
  width: 100%;

  :hover {
    background-color: #43bab8;
    color: #ffffff;
    transition: all 0.5s ease 0s;
  }
`;

export const Line = styled.hr`
  width: 58vw;
  border: 1px solid gray;
  border-bottom: none;
`;

export const BackgroundCommentContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  padding: 8px;
  border-radius: 5px;
`;
