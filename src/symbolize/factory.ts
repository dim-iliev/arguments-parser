import {
  DOLLAR_SMB,
  SPACE_SMB,
  DASH_SMB,
  DOUBLE_Q_SMB,
  SINGLE_Q_SMB,
  CURLY_OPEN_SMB,
  CURLY_CLOSE_SMB,
  COLUMN_SMB,
  ArgSymbol,
  CHAR_SMB,
  EQ_SMB,
} from "./symbols";

export const symbolFactoryMap: Record<string, Function> = {
  $: makeDollarSymbol,
  " ": makeSpaceSymbol,
  "-": makeDashSymbol,
  '"': makeDoubleQuoteSymbol,
  "'": makeSingleQuoteSymbol,
  "{": makeCurlyOpenSymbol,
  "}": makeCurlyCloseSymbol,
  ":": makeColumnSymbol,
  "=": makeEqSymbol,
};

export function makeDollarSymbol() {
  return { type: DOLLAR_SMB, value: "$" };
}
export function makeSpaceSymbol() {
  return { type: SPACE_SMB, value: " " };
}
export function makeDashSymbol() {
  return { type: DASH_SMB, value: "-" };
}
export function makeDoubleQuoteSymbol() {
  return { type: DOUBLE_Q_SMB, value: '"' };
}
export function makeSingleQuoteSymbol() {
  return { type: SINGLE_Q_SMB, value: "'" };
}
export function makeCurlyOpenSymbol() {
  return { type: CURLY_OPEN_SMB, value: "{" };
}
export function makeCurlyCloseSymbol() {
  return { type: CURLY_CLOSE_SMB, value: "}" };
}
export function makeColumnSymbol() {
  return { type: COLUMN_SMB, value: ":" };
}
export function makeCharSymbol(ch: string): ArgSymbol {
  return { type: CHAR_SMB, value: ch };
}
export function makeEqSymbol(ch: string) {
  return { type: EQ_SMB, value: "=" };
}
