import { getwordlist } from "./wordlelist";

export let answer = "";

export const retrieveAnswer = (): string => {
  if (answer.length > 0) return answer;
  const wordlelist = getwordlist();
  answer = wordlelist[Math.floor(Math.random() * wordlelist.length)];
  return answer;
};
