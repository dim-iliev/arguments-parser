type ShortTags = `-${string}`;

/**
 * Break into individual short tags, does not validate the input
 *
 * @see `breakShortTags()`
 * @param {string} shortTags - string needs to start with '-', like '-tag'
 * @returns {string[]}
 */
export function breakIntoTags(shortTags: ShortTags) {
  return (
    shortTags
      .slice(1)
      .split("")
      // makes sure to filter out -t-g, so it does not produce ['-t','--','-g']
      .filter((t) => t !== "-")
      .map((tag) => `-${tag}`)
  );
}

export function isShortTag(tag: string): tag is ShortTags {
  return /^-[^-]+/.test(tag);
}

/**
 * Breaks all short tag groups (starting with only one dash) into individual ones
 *
 * @example
 * ``` js
 *  const allTags = breakShortTags("--tag -tag 1")
 *  console.log(allTags) // ["--tag", "-t", "-a", "-g", "1"]
 * ```
 *
 * @param {string[]} params - list of string params
 * @returns {string[]}
 */
export function breakShortTags(params: string[]) {
  return params.reduce<string[]>((acc, param) => {
    if (isShortTag(param)) {
      return [...acc, ...breakIntoTags(param)];
    }
    return [...acc, param];
  }, []);
}
