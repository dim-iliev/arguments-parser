import tokenize from "..";
import { ParamToken, SpaceToken, StringToken } from "../token";
import { CHAR_SMB, DASH_SMB, SPACE_SMB } from "../../symbolize/symbols";

describe("Tokenize symbols", () => {
  describe("create tokens from symbols", () => {
    test("simple token", () => {
      const tokens = tokenize([
        { type: DASH_SMB, value: "-" },
        { type: DASH_SMB, value: "-" },
        { type: CHAR_SMB, value: "a" },
        { type: CHAR_SMB, value: "r" },
        { type: CHAR_SMB, value: "g" },
      ]);
      expect(tokens).toHaveLength(1);
      expect(tokens[0]).toBeTruthy();
      expect(tokens[0]?.type).toBe(ParamToken);
      expect(tokens[0]?.value).toBe("--arg");
    });

    test("double param token with space", () => {
      const tokens = tokenize([
        { type: DASH_SMB, value: "-" },
        { type: DASH_SMB, value: "-" },
        { type: CHAR_SMB, value: "a" },
        { type: CHAR_SMB, value: "r" },
        { type: CHAR_SMB, value: "g" },
        { type: SPACE_SMB, value: " " },
        { type: DASH_SMB, value: "-" },
        { type: DASH_SMB, value: "-" },
        { type: CHAR_SMB, value: "a" },
        { type: CHAR_SMB, value: "r" },
        { type: CHAR_SMB, value: "g" },
      ]);
      expect(tokens).toHaveLength(2);
      expect(tokens[0]).toBeTruthy();
      expect(tokens[0]?.type).toBe(ParamToken);
      expect(tokens[0]?.value).toBe("--arg");

      expect(tokens[1]?.type).toBe(ParamToken);
      expect(tokens[1]?.value).toBe("--arg");
    });

    test("double param token with space and a string value", () => {
      const tokens = tokenize([
        { type: DASH_SMB, value: "-" },
        { type: DASH_SMB, value: "-" },
        { type: CHAR_SMB, value: "a" },
        { type: CHAR_SMB, value: "r" },
        { type: CHAR_SMB, value: "g" },
        { type: SPACE_SMB, value: " " },
        { type: CHAR_SMB, value: "4" },
        { type: CHAR_SMB, value: "2" },
        { type: SPACE_SMB, value: " " },
        { type: DASH_SMB, value: "-" },
        { type: DASH_SMB, value: "-" },
        { type: CHAR_SMB, value: "a" },
        { type: CHAR_SMB, value: "r" },
        { type: CHAR_SMB, value: "g" },
      ]);
      expect(tokens).toHaveLength(3);

      expect(tokens[0]?.type).toBe(ParamToken);
      expect(tokens[0]?.value).toBe("--arg");
      expect(tokens[0]?.open).toBeFalsy();

      expect(tokens[1]?.type).toBe(StringToken);
      expect(tokens[1]?.value).toBe("42");
      expect(tokens[1]?.open).toBeFalsy();

      expect(tokens[2]?.type).toBe(ParamToken);
      expect(tokens[2]?.value).toBe("--arg");
      expect(tokens[2]?.open).toBeFalsy();
    });
  });
});
