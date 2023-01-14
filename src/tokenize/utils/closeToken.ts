import { ArgSymbol } from "../../symbolize/symbols";
import { Token } from "../token";

export function closeToken(t: Token, s?: ArgSymbol) {
  return {
    ...t,
    open: false,
    value: s !== undefined ? `${t.value}${s.value}` : t.value,
  };
}
