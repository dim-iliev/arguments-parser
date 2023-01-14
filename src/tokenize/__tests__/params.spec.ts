import { ParamToken, SpaceToken, StringToken } from "../token";
import tokenize from "..";
import { DASH_SMB, CHAR_SMB, SPACE_SMB } from "../../symbolize/symbols";

describe("Create param tokens", () => {
  test("simple params token", () => {
    const result = tokenize([
      { type: DASH_SMB, value: "-" },
      { type: DASH_SMB, value: "-" },
      { type: CHAR_SMB, value: "a" },
      { type: CHAR_SMB, value: "r" },
      { type: CHAR_SMB, value: "g" },
      { type: SPACE_SMB, value: " " },
      { type: CHAR_SMB, value: "1" },
    ]);

    expect(result).toHaveLength(2);

    expect(result[0].type).toBe(ParamToken);
    expect(result[0].value).toBe("--arg");

    expect(result[1].type).toBe(StringToken);
    expect(result[1].value).toBe("1");
  });

  test("multiple params token", () => {
    const result = tokenize([
      { type: DASH_SMB, value: "-" },
      { type: DASH_SMB, value: "-" },
      { type: CHAR_SMB, value: "a" },
      { type: CHAR_SMB, value: "r" },
      { type: CHAR_SMB, value: "g" },
      { type: SPACE_SMB, value: " " },
      { type: CHAR_SMB, value: "1" },
      { type: SPACE_SMB, value: " " },
      { type: DASH_SMB, value: "-" },
      { type: DASH_SMB, value: "-" },
      { type: CHAR_SMB, value: "a" },
      { type: CHAR_SMB, value: "r" },
      { type: CHAR_SMB, value: "g" },
    ]);

    expect(result).toHaveLength(3);

    expect(result[0].type).toBe(ParamToken);
    expect(result[0].value).toBe("--arg");

    expect(result[1].type).toBe(StringToken);
    expect(result[1].value).toBe("1");

    expect(result[2].type).toBe(ParamToken);
    expect(result[2].value).toBe("--arg");
  });
});
