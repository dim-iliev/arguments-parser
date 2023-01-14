import { Token } from "../token";

export function appendToBuffer(token: Token, val: string) {
  return {
    ...token,
    buffer: `${token.buffer}${val}`,
  };
}
