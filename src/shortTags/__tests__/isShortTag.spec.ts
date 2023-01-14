import { isShortTag } from "..";

describe("ShortTag", () => {
  test("short tags has only one dash but not more", () => {
    expect(isShortTag("-tag")).toBe(true);
    expect(isShortTag("--tag")).toBe(false);
  });
});
