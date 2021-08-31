import {toStr} from "../helpers/string/to_string";
import {REGEXP_HTML_SPECIAL_CHARACTERS} from "../helpers/regexp/regexp";

const escapeCharactersMap = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
};

function replaceSpecialCharacter(character) {
    return escapeCharactersMap[character];
}

export const escapeHtml = s => toStr(s).replace(REGEXP_HTML_SPECIAL_CHARACTERS, replaceSpecialCharacter)