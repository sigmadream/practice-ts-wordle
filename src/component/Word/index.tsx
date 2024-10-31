import { useEffect, useState } from "react";
import Letter from "../Letter";
import { AccuracyEnum } from "../../utilities/accuracy.utils";

interface IWordProps {
  isWordEvaluated: boolean;
  guessWordValue: string;
}

export const Word = ({ isWordEvaluated, guessWordValue }: IWordProps) => {
  const inititalAccuracyArray = [
    AccuracyEnum.none,
    AccuracyEnum.none,
    AccuracyEnum.none,
    AccuracyEnum.none,
    AccuracyEnum.none,
  ];

  const [isEvaluated, setIsEvaluated] = useState(false);
  const [guessValue, setGuessValue] = useState("");
  const [evaluatedResults, setEvaluatedResults] = useState<AccuracyEnum[]>(
    inititalAccuracyArray
  );

  useEffect(() => {
    setGuessValue(guessWordValue);
  }, [guessWordValue]);

  return (
    <div style={{ marginLeft: "15px" }}>
      {guessValue
        .toUpperCase()
        .split("")
        .map((nextLetter, letterIndex) => {
          return (
            <Letter
              key={"letter_" + letterIndex}
              value={nextLetter}
              accuracy={
                isEvaluated ? evaluatedResults[letterIndex] : AccuracyEnum.none
              }
              position={letterIndex}
            />
          );
        })}
    </div>
  );
};
