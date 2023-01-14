import { breakIntoTags } from "..";

describe("Break short tags", () => {
  test("Can break short tags into multiple", () => {
    expect(breakIntoTags("-tag")).toEqual(["-t", "-a", "-g"]);
  });

  test("Skips '-' when inside grouped short tags", () => {
    expect(breakIntoTags("-t-g")).toEqual(["-t", "-g"]);
  });
});
