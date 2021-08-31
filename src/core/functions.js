import camelCase from "../plugins/camel_case"
import capitalize from "../plugins/capitalize"
import dashedName from "../plugins/dashed_name"
import decapitalize from "../plugins/decapitalize"
import kebab from "../plugins/kebab_case"
import lower from "../plugins/lower_case"
import reverse from "../plugins/reverse"
import shuffle from "../plugins/shuffle"
import snake from "../plugins/snake_case"
import swap from "../plugins/swap"
import title from "../plugins/title_case"
import upper from "../plugins/upper_case"
import {wrap, wrapTag} from "../plugins/wrap"
import words from "../plugins/words"
import chars from "../plugins/chars"
import count from "../plugins/count"
import {countChars, countUniqueChars} from "../plugins/count_chars"
import countSubstr from "../plugins/count_substrings"
import {countWords, countUniqueWords} from "../plugins/count_words"
import escapeHtml from "../plugins/escape_html"
import unescapeHtml from "../plugins/unescape_html"
import unique from "../plugins/unique"
import uniqueWords from "../plugins/uniqueWords"
import substr from "../plugins/substr"
import first from "../plugins/first"
import last from "../plugins/last"
import truncate from "../plugins/truncate"
import slice from "../plugins/slice"
import prune from "../plugins/prune"
import repeat from "../plugins/repeat"
import { pad, lpad, rpad } from "../plugins/pad"
import insert from "../plugins/insert"
import {trim, rtrim, ltrim} from "../plugins/trim"
import endsWith from "../plugins/ends_with"
import isAlpha from "../plugins/is_alpha"
import isAlphaDigit from "../plugins/is_alpha_digit"
import isDigit from "../plugins/is_digit"
import isBlank from "../plugins/is_blank"
import isEmpty from "../plugins/is_empty"
import isLower from "../plugins/is_lower"
import isUpper from "../plugins/is_upper"
import startWith from "../plugins/start_with"
import {stripTags, stripTagsAll} from "../plugins/strip_tags"
import {sprintf, vsprintf} from "../plugins/sprintf"
import includes from "../plugins/includes"
import split from "../plugins/split"
import stripe from "../plugins/stripe"

export default {
    camelCase,
    capitalize,
    chars,
    count,
    countChars,
    countUniqueChars,
    countSubstr,
    countWords,
    countUniqueWords,
    dashedName,
    decapitalize,
    kebab,
    lower,
    reverse,
    shuffle,
    snake,
    swap,
    title,
    upper,
    words,
    wrap,
    wrapTag,
    escapeHtml,
    unescapeHtml,
    unique,
    uniqueWords,
    substr,
    first,
    last,
    truncate,
    slice,
    prune,
    repeat,
    pad,
    lpad,
    rpad,
    insert,
    trim,
    ltrim,
    rtrim,
    endsWith,
    isAlpha,
    isAlphaDigit,
    isDigit,
    isBlank,
    isEmpty,
    isLower,
    isUpper,
    startWith,
    stripTags,
    stripTagsAll,
    sprintf,
    vsprintf,
    includes,
    split,
    stripe
}

