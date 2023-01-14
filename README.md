# Parse arguments string reliably

### @dim.iliev/arguments-parser

`arguments-parser` helps when you need more than just an array of string.

#### Examples

```js
parse('--author John Doe --message "Hello World Now" -dip')
// Output:
["--author", "John Doe", "--message", '"Hello World Now"', "-dip"];
```

### Parsing grouped short tags

Use `breakShortTags` to ungroup words like `-dip` into an array of short tags.
It also takes extra care if you have words like `-t-g`, so you get `['-t', '-g']` and not
`['-t', '--', '-g']` which could be cause issues.

#### Example

```js
const result = parse('--author John Doe --message "Hello World Now" -dip')
// Output:
["--author", "John Doe", "--message", '"Hello World Now"', "-dip"]

breakShortTags(result)
// Output:
[... '"Hello World Now"', "-d", "-i", "-p"]
```
