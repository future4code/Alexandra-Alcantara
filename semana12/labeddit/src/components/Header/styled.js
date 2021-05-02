import { Toolbar, Box } from "@material-ui/core";
import styled from "styled-components";

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px 0 10px;
`;

export const StyledBox = styled(Box)`
  cursor: pointer;
`;

export const ImgLogo = styled.img`
  width: 2em;
  margin-right: 5px;
`;
