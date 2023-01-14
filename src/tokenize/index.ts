import { ArgSymbol } from "../symbolize/symbols";
import { jsonToken } from "./json";
import { paramToken } from "./param";
import { spaceToken } from "./space";
import { stringToken } from "./string";
import { Token } from "./token";
import { closeToken } from "./utils/closeToken";

const tokenizers = [paramToken, spaceToken, stringToken, jsonToken];

export default function tokenize(symbols: ArgSymbol[]) {
  let currentToken = null;
  const tokens: Token[] = [];

  for (const s of symbols) {
    let repeat = false;

    for (const tokenizer of tokenizers) {
      const [newToken, consumed]: [Token | null, Boolean] = tokenizer(
        s,
        currentToken
      );

      if (newToken === null) {
        repeat = false;
        continue;
      }

      if (!isOpen(newToken)) {
        tokens.push(newToken);
        currentToken = null;
        repeat = !consumed;
        break;
      }

      currentToken = newToken;
    }

    // Repeat the same symbol in case it was not consumed
    if (repeat) {
      for (const tokenizer of tokenizers) {
        const [newToken] = tokenizer(s, currentToken);

        if (newToken === null) {
          continue;
        }
        currentToken = newToken;
      }
    }
  }

  if (currentToken !== null) {
    tokens.push(closeToken(currentToken));
  }

  return tokens;
}

function isOpen(token: Token) {
  return token.open === true;
}
