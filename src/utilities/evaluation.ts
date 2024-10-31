import { retrieveAnswer } from "./answerRetriever";
import { AccuracyEnum } from "./accuracy.utils";

export interface ILetterScorePair {
  letter: string;
  accuracy: AccuracyEnum;
}

export const calculateLetterAccuracyMap = (
  words: string[]
): Map<string, AccuracyEnum> => {
  const accuracyMap = new Map<string, AccuracyEnum>();

  words.forEach((word) => {
    const scoringResults = evaluateWordScore(
      word,
      retrieveAnswer().toUpperCase()
    );

    const combinedResults: ILetterScorePair[] = scoringResults.map(
      (score, scoreIndex) => {
        return { letter: word[scoreIndex], accuracy: score };
      }
    );

    combinedResults.map((result) => {
      if (accuracyMap.has(result.letter)) {
        const currentAccuracy = accuracyMap.get(result.letter);
        if (Number(currentAccuracy) > Number(result.accuracy)) {
          accuracyMap.set(result.letter, result.accuracy);
        }
      } else {
        accuracyMap.set(result.letter, result.accuracy);
      }
    });
  });

  return accuracyMap;
};

const replaceAt = (
  source: string,
  index: number,
  replacement: string
): string => {
  if (index >= source.length) {
    return source.valueOf();
  }

  return source.substring(0, index) + replacement + source.substring(index + 1);
};

export const evaluateWordScore = (
  guess: string,
  answer: string
): AccuracyEnum[] => {
  let mask = answer;
  const result = [
    AccuracyEnum.doesNotExist,
    AccuracyEnum.doesNotExist,
    AccuracyEnum.doesNotExist,
    AccuracyEnum.doesNotExist,
    AccuracyEnum.doesNotExist,
  ];

  const markedCorrect: number[] = [];
  guess.split("").forEach((guessLetter, index) => {
    if (guessLetter === mask[index]) {
      result[index] = AccuracyEnum.correct;
      mask = replaceAt(mask, index, "_");
      markedCorrect.push(index);
    }
  });

  guess.split("").forEach((guessLetter, index) => {
    if (
      !markedCorrect.includes(index) &&
      mask.split("").includes(guessLetter)
    ) {
      result[index] = AccuracyEnum.wrongPosition;
      const firstPositionInAnswer = mask.indexOf(guessLetter);
      mask = replaceAt(mask, firstPositionInAnswer, "_");
    }
  });

  return result;
};
