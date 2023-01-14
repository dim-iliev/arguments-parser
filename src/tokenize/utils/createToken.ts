import { Token, TokenType } from "../token";

export function createToken(tokenType: TokenType, val: Token["value"]) {
  return {
    open: true,
    value: val,
    type: tokenType,
    buffer: "",
  };
}
