import parse from "..";

describe("parse", () => {
  describe("handle simple arguments", () => {
    test("one argument", () => {
      const result = parse("--param 1");
      expect(result).toEqual(["--param", "1"]);
    });

    test("one argument", () => {
      const result = parse("--param 1 --another-param 2");
      expect(result).toEqual(["--param", "1", "--another-param", "2"]);
    });

    test("one argument", () => {
      const result = parse("--param Hello World --another-param 2");
      expect(result).toEqual([
        "--param",
        "Hello World",
        "--another-param",
        "2",
      ]);
    });

    test("one argument", () => {
      const result = parse('--param "Hello World" --another-param 2');
      expect(result).toEqual([
        "--param",
        '"Hello World"',
        "--another-param",
        "2",
      ]);
    });

    test("one argument", () => {
      const result = parse(
        '--param "Hello World    2 Again" --another-param 2'
      );
      expect(result).toEqual([
        "--param",
        '"Hello World    2 Again"',
        "--another-param",
        "2",
      ]);
    });

    test("params without arguments", () => {
      const result = parse("--param --another-param");
      expect(result).toEqual(["--param", "--another-param"]);
    });

    test("without starting with a parameter", () => {
      const result = parse("foo bar baz --foobar");
      expect(result).toEqual(["foo bar baz", "--foobar"]);
    });

    test("also handles short params", () => {
      const result = parse("-foo -bar bazx1 baz-bazx2 bazx3 -1 --foobar");
      expect(result).toEqual([
        "-foo",
        "-bar",
        "bazx1 baz-bazx2 bazx3",
        "-1",
        "--foobar",
      ]);
    });

    test("handles param values with a '-'", () => {
      const result = parse("-foo foo-bar --foobar");
      expect(result).toEqual(["-foo", "foo-bar", "--foobar"]);
    });

    test("handles param values with a '-' and space", () => {
      const result = parse("-foo foo-   bar --foobar");
      expect(result).toEqual(["-foo", "foo-   bar", "--foobar"]);
    });
  });
});
