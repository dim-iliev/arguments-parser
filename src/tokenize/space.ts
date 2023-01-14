import { IS_CONSUMED, NOT_CUNSUMED, SpaceToken, Token } from "./token";
import { ArgSymbol, SPACE_SMB } from "../symbolize/symbols";
import { createToken } from "./utils/createToken";
import { closeToken } from "./utils/closeToken";
import { appendValue } from "./utils/appendVal";

export function spaceToken(
  symbol: ArgSymbol,
  token: Token | null
): [Token | null, Boolean] {
  if (token === null && symbol.type === SPACE_SMB) {
    return [createToken(SpaceToken, " "), IS_CONSUMED];
  }

  if (token?.type !== SpaceToken) {
    return [null, NOT_CUNSUMED];
  }

  if (token?.type === SpaceToken && symbol.type === SPACE_SMB) {
    return [appendValue(token, " "), IS_CONSUMED];
  }

  return [closeToken(token), NOT_CUNSUMED];
}
