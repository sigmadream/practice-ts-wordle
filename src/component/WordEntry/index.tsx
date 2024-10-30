import { useRef, useState } from "react";
import {
  StyledEvaluateButton,
  StyledWordEntry,
  StyledWordEntryContainer,
} from "./index.style";

interface IWordEntryProps {
  onGuessEntered(guess: string): void;
  onGuessComplete(): void;
}

export const WordEntry = ({
  onGuessEntered,
  onGuessComplete,
}: IWordEntryProps) => {
  const [value, setValue] = useState("");
  const wordEntryRef = useRef<HTMLInputElement>(null);

  const getValidWordleString = (rawString: string) => {
    const validWordleString = rawString.replace(/[^a-z]/gi, "");
    return validWordleString?.toUpperCase();
  };

  const handleLetterEntry = (e: any) => {
    const validString: string = getValidWordleString(e.target.value);
    onGuessEntered(validString);
    setValue(validString);
  };

  const handleGuessComplete = () => {
    setValue("");
    wordEntryRef?.current?.focus();
    onGuessComplete();
  };

  const handleEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value.length < 5) return;
    if (e.key === "Enter") {
      handleGuessComplete();
    }
  };

  return (
    <StyledWordEntryContainer>
      <StyledWordEntry
        autoFocus
        placeholder="Enter your guess..."
        value={value}
        maxLength={5}
        onChange={(e) => handleLetterEntry(e)}
        ref={wordEntryRef}
        onKeyDown={(e) => handleEnterPressed(e)}
      />
      {value.length !== 5 ? (
        ""
      ) : (
        <StyledEvaluateButton onClick={handleGuessComplete}>
          Guess
        </StyledEvaluateButton>
      )}
    </StyledWordEntryContainer>
  );
};
