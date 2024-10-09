import styled from "styled-components";
import { accuracyColorMap, AccuracyEnum } from "../../utilities/accuracy.utils";

export const StyledLetterButton = styled.button<{ accuracy: AccuracyEnum }>`
  margin: 2px;
  width: 60px;
  height: 60px;
  border-radius: 2px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  border: 2px solid #787c7f;
  background: ${(props) => accuracyColorMap.get(props.accuracy)};
`;

export const StyledBlankButton = styled.button`
  margin: 2px;
  width: 60px;
  height: 60px;
  border-radius: 2px;
  color: black;
  font-size: 30px;
  font-weight: bold;
  border: 2px solid #787c7f;
  background: black;
`;
