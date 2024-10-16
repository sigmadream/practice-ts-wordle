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

const fadeInAnimation = keyframes`
 0% { opacity: 0}
 30% { opacity: 0.3 }
 40% { opacity: 0.6; }
 100% { opacity: 1; }
`;

export const StyledGameOverDisplay = styled.div`
  width: 250px;
  height: 40px;
  text-align: center;
  color: white;
  font-size: 25px;
  animation-name: ${fadeInAnimation};
  animation-duration: 3s;
  animation-iteration-count: 1;
`;
export const StyledEvaluateButton = styled.button`
  width: 72px;
  height: 40px;
  background: #cc4433;
  color: white;
  border-radius: 5px;
  margin: 15px;
  position: relative;
  top: 10px;
`;

export const StyledWordEntryContainer = styled.div`
  display: block;
  flex: row;
`;
