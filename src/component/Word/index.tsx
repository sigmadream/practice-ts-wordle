import { useEffect, useState } from "react";
import Letter from "../Letter";
import { AccuracyEnum } from "../../utilities/accuracy.utils";
import { evaluateWordScore } from "../../utilities/evaluation";
import { retrieveAnswer } from "../../utilities/answerRetriever";

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
    const results = evaluateWordScore(
      guessValue,
      retrieveAnswer().toUpperCase()
    );
    setEvaluatedResults(results);
    setIsEvaluated(isWordEvaluated);
  }, [isWordEvaluated]);

  useEffect(() => {
    setGuessValue(guessWordValue.padEnd(5, "_"));
  }, [guessWordValue]);

  return (
    // letter rendering goes here
    <div style={{}}>
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
