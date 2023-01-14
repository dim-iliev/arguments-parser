import {
  IS_CONSUMED,
  NOT_CUNSUMED,
  SpaceToken,
  StringToken,
  Token,
} from "./token";
import {
  ArgSymbol,
  CHAR_SMB,
  COLUMN_SMB,
  CURLY_CLOSE_SMB,
  CURLY_OPEN_SMB,
  DOLLAR_SMB,
  DOUBLE_Q_SMB,
  EQ_SMB,
  SINGLE_Q_SMB,
  SPACE_SMB,
  DASH_SMB,
} from "../symbolize/symbols";
import { createToken } from "./utils/createToken";
import { closeToken } from "./utils/closeToken";
import { appendValue } from "./utils/appendVal";
import { appendToBuffer } from "./utils/appendToBuffer";

const startNewString = [
  CURLY_OPEN_SMB,
  CURLY_CLOSE_SMB,
  SINGLE_Q_SMB,
  DOUBLE_Q_SMB,
  EQ_SMB,
  DOLLAR_SMB,
  COLUMN_SMB,
  CHAR_SMB,
];

export function stringToken(
  symbol: ArgSymbol,
  token: Token | null
): [Token | null, Boolean] {
  if (token === null && startNewString.includes(symbol.type)) {
    return [createToken(StringToken, symbol.value), IS_CONSUMED];
  }

  if (token?.type !== StringToken) {
    return [null, NOT_CUNSUMED];
  }

  if (symbol.type === SPACE_SMB) {
    return [appendToBuffer(token, symbol.value), IS_CONSUMED];
  }

  if (symbol.type === DASH_SMB && token.buffer !== "") {
    return [closeToken(token), NOT_CUNSUMED];
  }

  return [appendValue(token, symbol.value), IS_CONSUMED];
}
