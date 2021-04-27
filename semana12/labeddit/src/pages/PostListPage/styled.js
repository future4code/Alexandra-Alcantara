import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid black;
`;

export const Title = styled.p`
  text-align: center;
`;

export const Text = styled.p`
  padding: 0 50px 0 50px;
`;
