import styled, { keyframes } from "styled-components";

export const StyledWordEntry = styled.input`
  margin: 5px;
  border-radius: 10px;
  width: 250px;
  height: 30px;
  display: block;
  border: 2px solid black;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
  }
`;
