import { CHAR_SMB, SPACE_SMB } from "../../symbolize/symbols";
import { stringToken } from "../string";
import { SpaceToken, StringToken, Token } from "../token";
import { createToken } from "../utils/createToken";

describe("String Token Creation", () => {
  test("make new token", () => {
    const [token, consumed] = stringToken({ type: CHAR_SMB, value: "a" }, null);

    expect(token).not.toBeNull();
    expect(consumed).toBeTruthy();
    expect(token?.type).toBe(StringToken);
  });

  test("append to a string token", () => {
    const token: Token = createToken(StringToken, "a");
    const [newToken, consumed] = stringToken(
      { type: CHAR_SMB, value: "a" },
      token
    );
    expect(newToken).not.toBeNull();
    expect(consumed).toBeTruthy();
    expect(newToken?.type).toBe(StringToken);
    expect(newToken?.open).toBeTruthy();
  });

  test("close with space token", () => {
    const token: Token = createToken(StringToken, "a");
    const [newToken, consumed] = stringToken(
      { type: SPACE_SMB, value: " " },
      token
    );
    expect(newToken).not.toBeNull();
    expect(consumed).toBeTruthy();
    expect(newToken?.type).toBe(StringToken);
    expect(newToken?.open).toBeTruthy();
    expect(newToken?.buffer).toBe(" ");
    expect(newToken?.value).toBe(token.value);
  });
});
