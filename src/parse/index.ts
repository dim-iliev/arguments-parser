import symbolize from "../symbolize";
import tokenize from "../tokenize";
import toWords from "../words";

export default function parse(args: string) {
  const symbols = symbolize(args);
  const tokens = tokenize(symbols);

  return toWords(tokens);
}
