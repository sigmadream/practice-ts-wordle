import { useState } from "react";
import { Word } from "./component/Word/Index";
import { WordEntry } from "./component/WordEntry";
import { retrieveAnswer } from "./utilities/answerRetriever";

function App() {
  const [wordGuess, setWordGuess] = useState("");
  const [nextGuessPosition, setNextGuessPosition] = useState(0);
  const [winning, setWinning] = useState<boolean | null>(null);

  const handleGuessCompletion = (guess: string): void => {
    if (wordGuess === retrieveAnswer().toUpperCase()) {
      setWinning(true);
      return;
    }

    setNextGuessPosition(nextGuessPosition + 1);
  };

  return (
    <>
      <WordEntry
        onGuessEntered={(guess) => setWordGuess(guess)}
        onGuessComplete={() => handleGuessCompletion(wordGuess)}
      />
      <Word isWordEvaluated={false} guessWordValue={wordGuess} />
    </>
  );
}

export default App;
