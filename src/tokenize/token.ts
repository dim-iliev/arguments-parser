export const ParamToken = 1;
export const JsonToken = 2;
export const StringToken = 3;
export const SpaceToken = 4;

export type TokenType =
  | typeof ParamToken
  | typeof JsonToken
  | typeof StringToken
  | typeof SpaceToken;

export type Token = {
  type: TokenType;
  value: string;
  open: Boolean;
  // Store temporary value - helps parsing strings with space, and potentially json
  buffer: string;
};

export const IS_CONSUMED = true;
export const NOT_CUNSUMED = false;
