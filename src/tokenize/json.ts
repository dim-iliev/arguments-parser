import { NOT_CUNSUMED, Token } from "./token";
import { ArgSymbol } from "../symbolize/symbols";

// Skip json parsing for now
export function jsonToken(
  symbol: ArgSymbol,
  token: Token | null
): [Token | null, Boolean] {
  return [null, NOT_CUNSUMED];
}
