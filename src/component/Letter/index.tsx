import { useEffect, useState } from "react";
import { AccuracyEnum } from "../../utilities/accuracy.utils";
import { StyledLetterButton } from "./index.style";

export interface ILetterProps {
  position: number;
  value: string;
  accuracy: AccuracyEnum;
}

export const Letter = ({ position, value, accuracy }: ILetterProps) => {
  return (
    <>
      <StyledLetterButton accuracy={accuracy}>{value}</StyledLetterButton>
    </>
  );
};

export default Letter;
