import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  text-align: center;
`;

export const Text = styled.p`
  padding: 0 50px 0 50px;
  height: 2vh;
  overflow: hidden;
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
`;

export const VoteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
