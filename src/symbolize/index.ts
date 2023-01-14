import { makeCharSymbol, symbolFactoryMap } from "./factory";
import { ArgSymbol } from "./symbols";

export default function symbolize(args: string) {
  const tokens: ArgSymbol[] = [];
  for (const ch of args) {
    const makeToken = symbolFactoryMap[ch];
    if (makeToken) {
      tokens.push(makeToken());
    } else {
      tokens.push(makeCharSymbol(ch));
    }
  }
  return tokens;
}
