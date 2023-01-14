import { DASH_SMB } from "../symbolize/symbols";
import {
  IS_CONSUMED,
  NOT_CUNSUMED as NOT_CONSUMED,
  ParamToken,
  Token,
} from "./token";
import { ArgSymbol, EQ_SMB, SPACE_SMB } from "../symbolize/symbols";
import { closeToken } from "./utils/closeToken";
import { appendValue } from "./utils/appendVal";
import { createToken } from "./utils/createToken";

export function paramToken(
  symbol: ArgSymbol,
  token: Token | null
): [Token | null, Boolean] {
  if (token === null && symbol.type === DASH_SMB) {
    return [createToken(ParamToken, symbol.value), IS_CONSUMED];
  }

  if (token?.type !== ParamToken) {
    return [null, NOT_CONSUMED];
  }

  if (symbol.type === SPACE_SMB || symbol.type === EQ_SMB) {
    return [closeToken(token), IS_CONSUMED];
  }

  return [appendValue(token, symbol.value), IS_CONSUMED];
}
