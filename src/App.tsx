import { useState } from "react";
import { Word } from "./component/Word";
import { WordEntry } from "./component/WordEntry";

function App() {
  const [wordGuess, setWordGuess] = useState("");
  const [nextGuessPosition, setNextGuessPosition] = useState(0);

  const handleGuessCompletion = (guess: string): void => {
    return;
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
