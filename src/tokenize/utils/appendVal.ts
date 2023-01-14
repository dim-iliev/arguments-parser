import { Token } from "../token";

export function appendValue(t: Token, ch: string) {
  return {
    ...t,
    buffer: "",
    value: `${t.value}${t.buffer}${ch}`,
  };
}
