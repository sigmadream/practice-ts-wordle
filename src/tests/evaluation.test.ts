import { AccuracyEnum } from "../utilities/accuracy.utils";
import { evaluateWordScore } from "../utilities/evaluation";
import { expect, test } from "vitest";

test("단어 모두 정답 평가", () => {
  const result = evaluateWordScore("react", "react");
  expect(result[0]).toBe(AccuracyEnum.correct);
  expect(result[1]).toBe(AccuracyEnum.correct);
  expect(result[2]).toBe(AccuracyEnum.correct);
  expect(result[3]).toBe(AccuracyEnum.correct);
  expect(result[4]).toBe(AccuracyEnum.correct);
});

test("잘못된 위치에 한 글자가 있는 단어와 올바른 위치에 있는 단어를 평가합니다.", () => {
  const result = evaluateWordScore("taste", "papal");
  expect(result[0]).toBe(AccuracyEnum.doesNotExist);
  expect(result[1]).toBe(AccuracyEnum.correct);
  expect(result[2]).toBe(AccuracyEnum.doesNotExist);
  expect(result[3]).toBe(AccuracyEnum.doesNotExist);
  expect(result[4]).toBe(AccuracyEnum.doesNotExist);
});

test("평가 단어 모두 틀림", () => {
  const result = evaluateWordScore("react", "mound");
  expect(result[0]).toBe(AccuracyEnum.doesNotExist);
  expect(result[1]).toBe(AccuracyEnum.doesNotExist);
  expect(result[2]).toBe(AccuracyEnum.doesNotExist);
  expect(result[3]).toBe(AccuracyEnum.doesNotExist);
  expect(result[4]).toBe(AccuracyEnum.doesNotExist);
});

test("단어의 잘못된 위치 평가", () => {
  const result = evaluateWordScore("react", "house");
  expect(result[0]).toBe(AccuracyEnum.doesNotExist);
  expect(result[1]).toBe(AccuracyEnum.wrongPosition);
  expect(result[2]).toBe(AccuracyEnum.doesNotExist);
  expect(result[3]).toBe(AccuracyEnum.doesNotExist);
  expect(result[4]).toBe(AccuracyEnum.doesNotExist);
});

test("올바른 위치에 있는 문자는 하나, 잘못된 위치에 있는 문자는 하나 평가합니다.", () => {
  const result = evaluateWordScore("oboes", "moons");
  expect(result[0]).toBe(AccuracyEnum.wrongPosition);
  expect(result[1]).toBe(AccuracyEnum.doesNotExist);
  expect(result[2]).toBe(AccuracyEnum.correct);
  expect(result[3]).toBe(AccuracyEnum.doesNotExist);
  expect(result[4]).toBe(AccuracyEnum.correct);
});

test("같은 글자 중 두 개는 맞추고 한 개는 틀린 위치에서 올바른 위치에 있는 글자를 평가합니다.", () => {
  const result = evaluateWordScore("roomy", "tombs");
  expect(result[0]).toBe(AccuracyEnum.doesNotExist);
  expect(result[1]).toBe(AccuracyEnum.correct);
  expect(result[2]).toBe(AccuracyEnum.doesNotExist);
  expect(result[3]).toBe(AccuracyEnum.wrongPosition);
  expect(result[4]).toBe(AccuracyEnum.doesNotExist);
});
