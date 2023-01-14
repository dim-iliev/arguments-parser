import { SpaceToken, ParamToken, StringToken } from "../tokenize/token";
import { Token } from "../tokenize/token";

export default function toWords(tokens: Token[]): string[] {
  const words = [];
  let currentWord: string | null = null;

  for (const t of tokens) {
    if (currentWord !== null && t.type === SpaceToken) {
      currentWord = `${currentWord}${t.value}`;
    }

    if (t.type === ParamToken) {
      if (currentWord !== null) {
        words.push(currentWord);
        currentWord = null;
        words.push(t.value);
      } else {
        words.push(t.value);
      }
    }

    if (t.type === StringToken) {
      if (currentWord !== null) {
        currentWord = `${currentWord}${t.value}`;
      } else {
        currentWord = t.value;
      }
    }
  }

  if (currentWord !== null) {
    words.push(currentWord);
  }

  return words;
}
