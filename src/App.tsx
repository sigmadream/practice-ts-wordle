import { useEffect, useState } from "react";
import { WordEntry } from "./component/WordEntry";
import { retrieveAnswer } from "./utilities/answerRetriever";
import { StyledGameOverDisplay } from "./component/WordEntry/index.style";
import { WordBoard } from "./component/WordBoard";

function App() {
  const [wordGuess, setWordGuess] = useState("");
  const [wordGuesses, setWordGuesses] = useState<IGuess[]>([]);
  const [nextGuessPosition, setNextGuessPosition] = useState(0);
  const [winning, setWinning] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverText, setGameOverText] = useState("");

  const handleGuessCompletion = (guess: string): void => {
    if (wordGuess === retrieveAnswer().toUpperCase()) {
      setWinning(true);
      return;
    }
    setNextGuessPosition(nextGuessPosition + 1);
  };

  useEffect(() => {
    if (winning != null) {
      setNextGuessPosition(0);
      setGameOver(true);
    }

    if (winning) {
      setGameOverText("You Won!!");
    } else if (winning === false) {
      setGameOverText(`Word: ${retrieveAnswer().toUpperCase()}`);
    }
  }, [winning]);

  useEffect(() => {
    if (nextGuessPosition === 6) {
      setWinning(false);
      return;
    }

    if (gameOver === true) return;

    setWordGuess("");
  }, [nextGuessPosition]);

  const handleWordGuesses = (guesses: IGuess[]) => {
    setWordGuesses(guesses);
  };

  return (
    <div className="App-board">
      {gameOver ? (
        <StyledGameOverDisplay>{gameOverText}</StyledGameOverDisplay>
      ) : (
        <WordEntry
          onGuessEntered={(guess) => setWordGuess(guess)}
          onGuessComplete={() => handleGuessCompletion(wordGuess)}
        />
      )}
      <WordBoard
        guess={wordGuess}
        currentPosition={nextGuessPosition}
        wordGuessesCallback={handleWordGuesses}
      />
    </div>
  );
}

export default App;
