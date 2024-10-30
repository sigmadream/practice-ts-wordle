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
      // handle case where its already marked in the
      // map from another letter
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
  // declare a mask to use record when a letter position is accounted for. initially its equal to the answer string
  let mask = answer;
  let result = [
    AccuracyEnum.doesNotExist,
    AccuracyEnum.doesNotExist,
    AccuracyEnum.doesNotExist,
    AccuracyEnum.doesNotExist,
    AccuracyEnum.doesNotExist,
  ];
  // first go through each letter in the guess and compare to see if its in the letter is in the

  // correct position, if it is, add it to its appropriate result position, and mark it complete in the mask and
  // mark it a used index so we don't evaluate it again

  let markedCorrect: number[] = [];
  guess.split("").forEach((guessLetter, index) => {
    if (guessLetter === mask[index]) {
      result[index] = AccuracyEnum.correct;
      mask = replaceAt(mask, index, "_");
      markedCorrect.push(index);
    }
  });

  // next go through each letter in the mask that is left and see if it is contained.  If it is,
  // add it to the proper result index in the
  // array and update the mask to account for the first position it found
  // else
  // if its not contained,  add the index to the result as doesNotExist
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
