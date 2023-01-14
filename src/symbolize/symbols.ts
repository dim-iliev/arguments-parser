// " "
export const SPACE_SMB = 1;
// -
export const DASH_SMB = 2;
// {
export const CURLY_OPEN_SMB = 3;
// }
export const CURLY_CLOSE_SMB = 4;
// "
export const DOUBLE_Q_SMB = 5;
// '
export const SINGLE_Q_SMB = 6;
// $
export const DOLLAR_SMB = 7;
// :
export const COLUMN_SMB = 8;
// =
export const EQ_SMB = 9;
export const CHAR_SMB = 10;

export type SymbolType =
  | typeof SPACE_SMB
  | typeof DASH_SMB
  | typeof CURLY_OPEN_SMB
  | typeof CURLY_CLOSE_SMB
  | typeof DOUBLE_Q_SMB
  | typeof SINGLE_Q_SMB
  | typeof DOLLAR_SMB
  | typeof COLUMN_SMB
  | typeof EQ_SMB
  | typeof CHAR_SMB;

export type ArgSymbol = {
  type: SymbolType;
  value: string;
};
