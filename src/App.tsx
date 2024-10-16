import { useState } from "react";
import { Word } from "./component/Word/Index";
import { WordEntry } from "./component/WordEntry";

function App() {
  const [wordGuess, setWordGuess] = useState("");
  return (
    <>
      <WordEntry onGuessEntered={(guess) => setWordGuess(guess)} />
      <Word isWordEvaluated={false} guessWordValue={wordGuess} />
    </>
  );
}

export default App;
