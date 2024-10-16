import { useState } from "react";
import { StyledWordEntry } from "./index.style";

interface IWordEntryProps {
  onGuessEntered(guess: string): void;
}

export const WordEntry = ({ onGuessEntered }: IWordEntryProps) => {
  const [value, setValue] = useState("");
  const getValidWordleString = (rawString: string) => {
    const validWordleString = rawString.replace(/[^a-z]/gi, "");
    return validWordleString?.toUpperCase();
  };

  const handleLetterEntry = (e: any) => {
    const validString: string = getValidWordleString(e.target.value);
    onGuessEntered(validString);
    setValue(validString);
  };

  return (
    <StyledWordEntry
      autoFocus
      placeholder="Enter your guess..."
      value={value}
      maxLength={5}
      onChange={(e) => handleLetterEntry(e)}
    />
  );
};
