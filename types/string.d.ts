/**
 * @olton/string - A comprehensive string manipulation library
 * @version 0.10.1
 * @license MIT
 */

/**
 * Options for creating a Str instance
 */
interface StrOptions {
  /**
   * Whether the string is mutable (can be modified in place)
   * @default true
   */
  mutable?: boolean;
}

/**
 * Str class for string manipulation
 */
declare class Str {
  /**
   * The string value
   */
  value: string;

  /**
   * Whether the string is mutable
   */
  mutable: boolean;

  /**
   * Creates a new Str instance
   * @param v - The initial string value
   * @param options - Options for the Str instance
   */
  constructor(v?: any, options?: StrOptions);

  /**
   * Gets or sets the string value
   * @param v - The new string value (optional)
   * @returns The current string value if v is not provided, otherwise the Str instance
   */
  val(v?: any): string | Str;

  /**
   * Gets the length of the string
   */
  get length(): number;

  /**
   * Sets the immutability state of the string
   * @param state - Whether the string should be immutable
   */
  immutable(state?: boolean): void;

  /**
   * Converts the string to a primitive value
   */
  toString(): string;

  /**
   * Internal method to handle the result of operations based on mutability
   * @param v - The result value
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   * @private
   */
  _result(v: string): Str;

  /**
   * Converts the string to camelCase
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  camelCase(): Str;

  /**
   * Capitalizes the first character of the string
   * @param strong - If true, the rest of the string will be converted to lowercase
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  capitalize(strong?: boolean): Str;

  /**
   * Splits the string into an array of characters
   * @param ignore - Array of characters to ignore
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  chars(ignore?: string[]): Str;

  /**
   * Counts the number of characters in the string
   * @returns The number of characters
   */
  count(): number;

  /**
   * Counts the number of characters in the string, excluding ignored characters
   * @param ignore - Array of characters to ignore
   * @returns The number of characters
   */
  countChars(ignore?: string[]): number;

  /**
   * Counts the number of unique characters in the string
   * @param ignore - Array of characters to ignore
   * @returns The number of unique characters
   */
  countUniqueChars(ignore?: string[]): number;

  /**
   * Counts the number of occurrences of a substring
   * @param sub - The substring to count
   * @returns The number of occurrences
   */
  countSubstr(sub: string): number;

  /**
   * Counts the number of words in the string
   * @param pattern - Regular expression pattern to match words
   * @param flags - Regular expression flags
   * @returns The number of words
   */
  countWords(pattern?: string | RegExp, flags?: string): number;

  /**
   * Counts the number of unique words in the string
   * @param pattern - Regular expression pattern to match words
   * @param flags - Regular expression flags
   * @returns The number of unique words
   */
  countUniqueWords(pattern?: string | RegExp, flags?: string): number;

  /**
   * Converts the string to a dashed name format
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  dashedName(): Str;

  /**
   * Converts the first character of the string to lowercase
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  decapitalize(): Str;

  /**
   * Checks if the string ends with the specified substring
   * @param str - The substring to check
   * @param pos - The position at which to end checking
   * @returns True if the string ends with the specified substring, false otherwise
   */
  endsWith(str: string, pos?: number): boolean;

  /**
   * Escapes HTML special characters in the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  escapeHtml(): Str;

  /**
   * Gets the first character of the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  first(): Str;

  /**
   * Checks if the string includes the specified substring
   * @param sub - The substring to check
   * @param pos - The position at which to begin checking
   * @returns True if the string includes the specified substring, false otherwise
   */
  includes(sub: string, pos?: number): boolean;

  /**
   * Inserts a string at the specified position
   * @param str - The string to insert
   * @param pos - The position at which to insert the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  insert(str: string, pos: number): Str;

  /**
   * Checks if the string contains only alphabetic characters
   * @returns True if the string contains only alphabetic characters, false otherwise
   */
  isAlpha(): boolean;

  /**
   * Checks if the string contains only alphabetic and digit characters
   * @returns True if the string contains only alphabetic and digit characters, false otherwise
   */
  isAlphaDigit(): boolean;

  /**
   * Checks if the string is blank (empty or whitespace only)
   * @param strong - If true, considers strings with only whitespace as blank
   * @returns True if the string is blank, false otherwise
   */
  isBlank(strong?: boolean): boolean;

  /**
   * Checks if the string contains only digit characters
   * @returns True if the string contains only digit characters, false otherwise
   */
  isDigit(): boolean;

  /**
   * Checks if the string is empty
   * @returns True if the string is empty, false otherwise
   */
  isEmpty(): boolean;

  /**
   * Checks if the string is lowercase
   * @returns True if the string is lowercase, false otherwise
   */
  isLower(): boolean;

  /**
   * Checks if the string is uppercase
   * @returns True if the string is uppercase, false otherwise
   */
  isUpper(): boolean;

  /**
   * Converts the string to kebab-case
   * @param joinWith - The character to join words with
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  kebab(joinWith?: string): Str;

  /**
   * Gets the last character(s) of the string
   * @param len - The number of characters to get
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  last(len?: number): Str;

  /**
   * Converts the string to lowercase
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  lower(): Str;

  /**
   * Checks if the string matches the specified pattern
   * @param pattern - The pattern to match
   * @param flags - Regular expression flags
   * @returns True if the string matches the pattern, false otherwise
   */
  matches(pattern: string | RegExp, flags?: string): boolean;

  /**
   * Pads the string on both sides with the specified padding
   * @param pad - The padding string
   * @param len - The total length of the resulting string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  pad(pad: string, len: number): Str;

  /**
   * Pads the string on the left with the specified padding
   * @param pad - The padding string
   * @param len - The total length of the resulting string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  lpad(pad: string, len: number): Str;

  /**
   * Pads the string on the right with the specified padding
   * @param pad - The padding string
   * @param len - The total length of the resulting string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  rpad(pad: string, len: number): Str;

  /**
   * Prunes the string to the specified length, adding an ellipsis if necessary
   * @param len - The maximum length of the resulting string
   * @param end - The string to add at the end if pruned
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  prune(len: number, end?: string): Str;

  /**
   * Repeats the string the specified number of times
   * @param times - The number of times to repeat the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  repeat(times: number): Str;

  /**
   * Appends a string to the end of the current string
   * @param str - The string to append
   * @param times - The number of times to append the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  append(str: string, times?: number): Str;

  /**
   * Prepends a string to the beginning of the current string
   * @param str - The string to prepend
   * @param times - The number of times to prepend the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  prepend(str: string, times?: number): Str;

  /**
   * Reverses the string
   * @param ignore - Array of characters to ignore
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  reverse(ignore?: string[]): Str;

  /**
   * Shuffles the characters in the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  shuffle(): Str;

  /**
   * Slices the string into parts
   * @param parts - The number of parts to slice the string into
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  slice(parts: number): Str;

  /**
   * Converts the string to snake_case
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  snake(): Str;

  /**
   * Splits the string into an array of substrings
   * @param sep - The separator to use
   * @param limit - The maximum number of substrings to return
   * @param trim - Whether to trim the substrings
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  split(sep?: string | RegExp, limit?: number, trim?: boolean): Str;

  /**
   * Formats the string using sprintf-style formatting
   * @param args - The arguments to format the string with
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  sprintf(...args: any[]): Str;

  /**
   * Formats the string using vsprintf-style formatting
   * @param args - The arguments to format the string with
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  vsprintf(...args: any[]): Str;

  /**
   * Checks if the string starts with the specified substring
   * @param str - The substring to check
   * @param pos - The position at which to begin checking
   * @returns True if the string starts with the specified substring, false otherwise
   */
  startsWith(str: string, pos?: number): boolean;

  /**
   * Strips the BOM (Byte Order Mark) from the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  stripBoom(): Str;

  /**
   * Strips HTML tags from the string
   * @param allowed - Array of tags to allow
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  stripTags(allowed?: string[]): Str;

  /**
   * Strips all HTML tags from the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  stripTagsAll(): Str;

  /**
   * Strips the specified substring from the string
   * @param str - The substring to strip
   * @param replace - The string to replace the stripped substring with
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  strip(str: string, replace?: string): Str;

  /**
   * Gets a substring of the string
   * @param start - The starting index
   * @param len - The length of the substring
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  substring(start: number, len?: number): Str;

  /**
   * Swaps the case of each character in the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  swap(): Str;

  /**
   * Converts the string to title case
   * @param noSplit - If true, doesn't split the string into words
   * @param sep - The separator to use when splitting the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  title(noSplit?: boolean, sep?: string | RegExp): Str;

  /**
   * Trims whitespace from both ends of the string
   * @param ws - The characters to trim
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  trim(ws?: string): Str;

  /**
   * Trims whitespace from the left end of the string
   * @param ws - The characters to trim
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  ltrim(ws?: string): Str;

  /**
   * Trims whitespace from the right end of the string
   * @param ws - The characters to trim
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  rtrim(ws?: string): Str;

  /**
   * Truncates the string to the specified length
   * @param len - The maximum length of the resulting string
   * @param end - The string to add at the end if truncated
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  truncate(len: number, end?: string): Str;

  /**
   * Truncates the string to the specified length, aligning to word boundaries
   * @param len - The maximum length of the resulting string
   * @param end - The string to add at the end if truncated
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  truncateWithAlign(len: number, end?: string): Str;

  /**
   * Unescapes HTML special characters in the string
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  unescapeHtml(): Str;

  /**
   * Gets the unique characters in the string
   * @param ignore - Array of characters to ignore
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  unique(ignore?: string[]): Str;

  /**
   * Gets the unique words in the string
   * @param pattern - Regular expression pattern to match words
   * @param flags - Regular expression flags
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  uniqueWords(pattern?: string | RegExp, flags?: string): Str;

  /**
   * Converts the string to uppercase
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  upper(): Str;

  /**
   * Gets the words in the string
   * @param pattern - Regular expression pattern to match words
   * @param flags - Regular expression flags
   * @returns An array of words
   */
  words(pattern?: string | RegExp, flags?: string): string[];

  /**
   * Wraps the string with the specified strings
   * @param before - The string to add before
   * @param after - The string to add after
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  wrap(before: string, after?: string): Str;

  /**
   * Wraps the string with the specified HTML tag
   * @param tag - The HTML tag to wrap with
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  wrapTag(tag: string): Str;

  /**
   * Shortens the string to the specified length
   * @param l - The maximum length of the resulting string
   * @param d - The string to add at the end if shortened
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  shorten(l: number, d?: string): Str;

  /**
   * Returns the string if it's not empty, otherwise returns the default value
   * @param d - The default value(s) to use
   * @returns A new Str instance if immutable, otherwise this instance with updated value
   */
  nvl(...d: any[]): Str;

  /**
   * Displays information about the library
   */
  static info(): void;

  /**
   * Checks if the value is a string
   * @param v - The value to check
   * @returns True if the value is a string, false otherwise
   */
  static isString(v: any): boolean;
}

/**
 * Creates a new Str instance
 * @param v - The initial string value
 * @param mutable - Whether the string is mutable
 * @returns A new Str instance
 */
declare function str(v?: any, mutable?: boolean): Str;

/**
 * Converts a value to camelCase
 * @param s - The value to convert
 * @returns The camelCase string
 */
declare function camelCase(s: any): string;

/**
 * Capitalizes the first character of a string
 * @param s - The string to capitalize
 * @param strong - If true, the rest of the string will be converted to lowercase
 * @returns The capitalized string
 */
declare function capitalize(s: any, strong?: boolean): string;

/**
 * Splits a string into an array of characters
 * @param s - The string to split
 * @param ignore - Array of characters to ignore
 * @returns An array of characters
 */
declare function chars(s: any, ignore?: string[]): string[];

/**
 * Counts the number of characters in a string
 * @param s - The string to count
 * @returns The number of characters
 */
declare function count(s: any): number;

/**
 * Counts the number of characters in a string, excluding ignored characters
 * @param s - The string to count
 * @param ignore - Array of characters to ignore
 * @returns The number of characters
 */
declare function countChars(s: any, ignore?: string[]): number;

/**
 * Counts the number of unique characters in a string
 * @param s - The string to count
 * @param ignore - Array of characters to ignore
 * @returns The number of unique characters
 */
declare function countUniqueChars(s: any, ignore?: string[]): number;

/**
 * Counts the number of occurrences of a substring in a string
 * @param s - The string to search in
 * @param sub - The substring to count
 * @returns The number of occurrences
 */
declare function countSubstr(s: any, sub: string): number;

/**
 * Counts the number of words in a string
 * @param s - The string to count
 * @param pattern - Regular expression pattern to match words
 * @param flags - Regular expression flags
 * @returns The number of words
 */
declare function countWords(s: any, pattern?: string | RegExp, flags?: string): number;

/**
 * Counts the number of unique words in a string
 * @param s - The string to count
 * @param pattern - Regular expression pattern to match words
 * @param flags - Regular expression flags
 * @returns The number of unique words
 */
declare function countUniqueWords(s: any, pattern?: string | RegExp, flags?: string): number;

/**
 * Converts a string to a dashed name format
 * @param s - The string to convert
 * @returns The dashed name string
 */
declare function dashedName(s: any): string;

/**
 * Converts the first character of a string to lowercase
 * @param s - The string to convert
 * @returns The decapitalized string
 */
declare function decapitalize(s: any): string;

/**
 * Checks if a string ends with the specified substring
 * @param s - The string to check
 * @param str - The substring to check
 * @param pos - The position at which to end checking
 * @returns True if the string ends with the specified substring, false otherwise
 */
declare function endsWith(s: any, str: string, pos?: number): boolean;

/**
 * Escapes HTML special characters in a string
 * @param s - The string to escape
 * @returns The escaped string
 */
declare function escapeHtml(s: any): string;

/**
 * Gets the first character of a string
 * @param s - The string to get the first character from
 * @returns The first character
 */
declare function first(s: any): string;

/**
 * Checks if a string includes the specified substring
 * @param s - The string to check
 * @param sub - The substring to check
 * @param pos - The position at which to begin checking
 * @returns True if the string includes the specified substring, false otherwise
 */
declare function includes(s: any, sub: string, pos?: number): boolean;

/**
 * Inserts a string at the specified position
 * @param s - The string to insert into
 * @param str - The string to insert
 * @param pos - The position at which to insert the string
 * @returns The resulting string
 */
declare function insert(s: any, str: string, pos: number): string;

/**
 * Checks if a string contains only alphabetic characters
 * @param s - The string to check
 * @returns True if the string contains only alphabetic characters, false otherwise
 */
declare function isAlpha(s: any): boolean;

/**
 * Checks if a string contains only alphabetic and digit characters
 * @param s - The string to check
 * @returns True if the string contains only alphabetic and digit characters, false otherwise
 */
declare function isAlphaDigit(s: any): boolean;

/**
 * Checks if a string is blank (empty or whitespace only)
 * @param s - The string to check
 * @param strong - If true, considers strings with only whitespace as blank
 * @returns True if the string is blank, false otherwise
 */
declare function isBlank(s: any, strong?: boolean): boolean;

/**
 * Checks if a string contains only digit characters
 * @param s - The string to check
 * @returns True if the string contains only digit characters, false otherwise
 */
declare function isDigit(s: any): boolean;

/**
 * Checks if a string is empty
 * @param s - The string to check
 * @returns True if the string is empty, false otherwise
 */
declare function isEmpty(s: any): boolean;

/**
 * Checks if a string is lowercase
 * @param s - The string to check
 * @returns True if the string is lowercase, false otherwise
 */
declare function isLower(s: any): boolean;

/**
 * Checks if a value is a string
 * @param v - The value to check
 * @returns True if the value is a string, false otherwise
 */
declare function isString(v: any): boolean;

/**
 * Checks if a string is uppercase
 * @param s - The string to check
 * @returns True if the string is uppercase, false otherwise
 */
declare function isUpper(s: any): boolean;

/**
 * Converts a string to kebab-case
 * @param s - The string to convert
 * @param joinWith - The character to join words with
 * @returns The kebab-case string
 */
declare function kebab(s: any, joinWith?: string): string;

/**
 * Gets the last character(s) of a string
 * @param s - The string to get the last character(s) from
 * @param len - The number of characters to get
 * @returns The last character(s)
 */
declare function last(s: any, len?: number): string;

/**
 * Converts a string to lowercase
 * @param s - The string to convert
 * @returns The lowercase string
 */
declare function lower(s: any): string;

/**
 * Checks if a string matches the specified pattern
 * @param s - The string to check
 * @param pattern - The pattern to match
 * @param flags - Regular expression flags
 * @returns True if the string matches the pattern, false otherwise
 */
declare function matches(s: any, pattern: string | RegExp, flags?: string): boolean;

/**
 * Returns the string if it's not empty, otherwise returns the default value
 * @param s - The string to check
 * @param d - The default value(s) to use
 * @returns The string or the default value
 */
declare function nvl(s: any, ...d: any[]): string;

/**
 * Pads a string on both sides with the specified padding
 * @param s - The string to pad
 * @param pad - The padding string
 * @param len - The total length of the resulting string
 * @returns The padded string
 */
declare function pad(s: any, pad: string, len: number): string;

/**
 * Pads a string on the left with the specified padding
 * @param s - The string to pad
 * @param pad - The padding string
 * @param len - The total length of the resulting string
 * @returns The padded string
 */
declare function lpad(s: any, pad: string, len: number): string;

/**
 * Pads a string on the right with the specified padding
 * @param s - The string to pad
 * @param pad - The padding string
 * @param len - The total length of the resulting string
 * @returns The padded string
 */
declare function rpad(s: any, pad: string, len: number): string;

/**
 * Prunes a string to the specified length, adding an ellipsis if necessary
 * @param s - The string to prune
 * @param len - The maximum length of the resulting string
 * @param end - The string to add at the end if pruned
 * @returns The pruned string
 */
declare function prune(s: any, len: number, end?: string): string;

/**
 * Repeats a string the specified number of times
 * @param s - The string to repeat
 * @param times - The number of times to repeat the string
 * @returns The repeated string
 */
declare function repeat(s: any, times: number): string;

/**
 * Appends a string to the end of another string
 * @param s - The string to append to
 * @param str - The string to append
 * @param times - The number of times to append the string
 * @returns The resulting string
 */
declare function append(s: any, str: string, times?: number): string;

/**
 * Prepends a string to the beginning of another string
 * @param s - The string to prepend to
 * @param str - The string to prepend
 * @param times - The number of times to prepend the string
 * @returns The resulting string
 */
declare function prepend(s: any, str: string, times?: number): string;

/**
 * Reverses a string
 * @param s - The string to reverse
 * @param ignore - Array of characters to ignore
 * @returns The reversed string
 */
declare function reverse(s: any, ignore?: string[]): string;

/**
 * Shortens a string to the specified length
 * @param s - The string to shorten
 * @param l - The maximum length of the resulting string
 * @param d - The string to add at the end if shortened
 * @returns The shortened string
 */
declare function shorten(s: any, l: number, d?: string): string;

/**
 * Shuffles the characters in a string
 * @param s - The string to shuffle
 * @returns The shuffled string
 */
declare function shuffle(s: any): string;

/**
 * Slices a string into parts
 * @param s - The string to slice
 * @param parts - The number of parts to slice the string into
 * @returns An array of string parts
 */
declare function slice(s: any, parts: number): string[];

/**
 * Converts a string to snake_case
 * @param s - The string to convert
 * @returns The snake_case string
 */
declare function snake(s: any): string;

/**
 * Splits a string into an array of substrings
 * @param s - The string to split
 * @param sep - The separator to use
 * @param limit - The maximum number of substrings to return
 * @param trim - Whether to trim the substrings
 * @returns An array of substrings
 */
declare function split(s: any, sep?: string | RegExp, limit?: number, trim?: boolean): string[];

/**
 * Formats a string using sprintf-style formatting
 * @param s - The string to format
 * @param args - The arguments to format the string with
 * @returns The formatted string
 */
declare function sprintf(s: any, ...args: any[]): string;

/**
 * Formats a string using vsprintf-style formatting
 * @param s - The string to format
 * @param args - The arguments to format the string with
 * @returns The formatted string
 */
declare function vsprintf(s: any, ...args: any[]): string;

/**
 * Checks if a string starts with the specified substring
 * @param s - The string to check
 * @param str - The substring to check
 * @param pos - The position at which to begin checking
 * @returns True if the string starts with the specified substring, false otherwise
 */
declare function startsWith(s: any, str: string, pos?: number): boolean;

/**
 * Strips the BOM (Byte Order Mark) from a string
 * @param s - The string to strip
 * @returns The string without the BOM
 */
declare function stripBoom(s: any): string;

/**
 * Strips the specified substring from a string
 * @param s - The string to strip
 * @param str - The substring to strip
 * @param replace - The string to replace the stripped substring with
 * @returns The resulting string
 */
declare function strip(s: any, str: string, replace?: string): string;

/**
 * Strips HTML tags from a string
 * @param s - The string to strip
 * @param allowed - Array of tags to allow
 * @returns The string without HTML tags
 */
declare function stripTags(s: any, allowed?: string[]): string;

/**
 * Strips all HTML tags from a string
 * @param s - The string to strip
 * @returns The string without HTML tags
 */
declare function stripTagsAll(s: any): string;

/**
 * Gets the words in a string
 * @param s - The string to get words from
 * @param pattern - Regular expression pattern to match words
 * @param flags - Regular expression flags
 * @returns An array of words
 */
declare function words(s: any, pattern?: string | RegExp, flags?: string): string[];

/**
 * Wraps a string with the specified strings
 * @param s - The string to wrap
 * @param before - The string to add before
 * @param after - The string to add after
 * @returns The wrapped string
 */
declare function wrap(s: any, before: string, after?: string): string;

/**
 * Wraps a string with the specified HTML tag
 * @param s - The string to wrap
 * @param tag - The HTML tag to wrap with
 * @returns The wrapped string
 */
declare function wrapTag(s: any, tag: string): string;
