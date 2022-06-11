(function () {
    'use strict';

    /**
     * A regular expression string matching digits
     */
    const digit = '\\d';

    /**
     * A regular expression string matching whitespace
     */
    const whitespace = '\\s\\uFEFF\\xA0';

    /**
     * A regular expression string matching diacritical mark
     */
    const diacriticalMark = '\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F';

    /**
     * A regular expression to match the General Punctuation Unicode block
     */
    const generalPunctuationBlock = '\\u2000-\\u206F';

    /**
     * A regular expression to match non characters from from Basic Latin and Latin-1 Supplement Unicode blocks
     */
    const nonCharacter = '\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7';

    /**
     * A regular expression to match the dingbat Unicode block
     */
    const dingbatBlock = '\\u2700-\\u27BF';

    /**
     * A regular expression string that matches lower case letters: LATIN
     */
    const lowerCaseLetter = 'a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F';

    /**
     * A regular expression string that matches upper case letters: LATIN
     */
    const upperCaseLetter = '\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e';

    /**
     * Regular expression to match whitespaces from the left side
     */
    const REGEXP_TRIM_LEFT = new RegExp('^[' + whitespace + ']+');

    /**
     * Regular expression to match whitespaces from the right side
     */
    const REGEXP_TRIM_RIGHT = new RegExp('[' + whitespace + ']+$');

    /**
     * Regular expression to match digit characters
     */
    const REGEXP_DIGIT = new RegExp('^' + digit + '+$');

    /**
     * Regular expression to match HTML special characters.
     */
    const REGEXP_HTML_SPECIAL_CHARACTERS = /[<>&"'`]/g;
    const REGEXP_TAGS = /(<([^>]+)>)/ig;

    /**
     * Regular expression to match Unicode words
     */
    const REGEXP_WORD = new RegExp(
        '(?:[' +
        upperCaseLetter +
        '][' +
        diacriticalMark +
        ']*)?(?:[' +
        lowerCaseLetter +
        '][' +
        diacriticalMark +
        ']*)+|\
(?:[' +
        upperCaseLetter +
        '][' +
        diacriticalMark +
        ']*)+(?![' +
        lowerCaseLetter +
        '])|\
[' +
        digit +
        ']+|\
[' +
        dingbatBlock +
        ']|\
[^' +
        nonCharacter +
        generalPunctuationBlock +
        whitespace +
        ']+',
        'g'
    );

    /**
     * Regular expression to match words from Basic Latin and Latin-1 Supplement blocks
     */
    const REGEXP_LATIN_WORD = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

    /**
     * Regular expression to match alpha characters
     */
    const REGEXP_ALPHA = new RegExp('^(?:[' + lowerCaseLetter + upperCaseLetter + '][' + diacriticalMark + ']*)+$');

    /**
     * Regular expression to match alpha and digit characters
     */
    const REGEXP_ALPHA_DIGIT = new RegExp(
        '^((?:[' + lowerCaseLetter + upperCaseLetter + '][' + diacriticalMark + ']*)|[' + digit + '])+$'
    );

    /**
     * Regular expression to match Extended ASCII characters, i.e. the first 255
     */
    const REGEXP_EXTENDED_ASCII = /^[\x01-\xFF]*$/;

    const toStr = (val, def = "") => {
        if (!val) return def;
        if (typeof val === "string") return val;
        if (Array.isArray(val)) return val.join("");
        return JSON.stringify(val);
    };

    const nvl = (a, b) => {
        return (typeof a === "undefined" || a === null) ? b : a
    };

    /*
    * Split string to words. You can set specified patter to split
    * */
    const words = (s, pattern, flags) => {
        let regexp;

        if (!pattern) {
            regexp = REGEXP_EXTENDED_ASCII.test(s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
        } else if (pattern instanceof RegExp) {
            regexp = pattern;
        } else {
            regexp = new RegExp(pattern, nvl(flags, ''));
        }

        return nvl(toStr(s).match(regexp), []);
    };

    const capitalize = (s, strong = false) => {
        let _s = toStr(s);
        let last = (_s).substr(1);
        return (_s).substr(0, 1).toUpperCase() + (strong ? last.toLowerCase() : last)
    };

    const camelCase = s => {
        return words(toStr(s)).map( (el, i) => {
            return i === 0 ? el.toLowerCase() : capitalize(el)
        } ).join("")
    };

    const dashedName = s => words(toStr(s)).map( (el) => el.toLowerCase() ).join("-");

    const decapitalize = s => {
        let _s = toStr(s);
        return (_s).substr(0, 1).toLowerCase() + (_s).substr(1)
    };

    const kebab = (s, joinWith = '-') => words(toStr(s)).map( el => el.toLowerCase() ).join(joinWith);

    const lower = s => toStr(s).toLowerCase();

    /*
    * Split string to chars array with ignores
    * */
    const chars$1 = (s, ignore = []) => (toStr(s)).split("").filter( (el) => !ignore.includes(el));

    const reverse = (s, ignore) => chars$1(toStr(s), ignore).reverse().join("");

    const shuffleArray = (a = []) => {
      let _a = [...a];
      let i = _a.length, t, r;

      while (0 !== i) {
        r = Math.floor(Math.random() * i);
        i -= 1;
        t = _a[i];
        _a[i] = _a[r];
        _a[r] = t;
      }

      return _a;
    };

    const shuffle = s => shuffleArray(toStr(s).split("")).join("");

    const snake = s => words(toStr(s)).map( el => el.toLowerCase() ).join("_");

    const _swap = (swapped, char) => {
        const lc = char.toLowerCase();
        const uc = char.toUpperCase();

        return swapped + (char === lc ? uc : lc)
    };

    const swap = s => toStr(s).split("").reduce(_swap, '');

    const title = (s, noSplit, sep = "") => {
        let _s = toStr(s);
        const regexp = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
        const noSplitArray = Array.isArray(noSplit) ? noSplit : typeof noSplit !== "string" ?  [] : noSplit.split(sep);

        return s.replace(regexp, (w, i) => {
            const isNoSplit = i && noSplitArray.includes(_s[i - 1]);
            return isNoSplit ? lower(w) : capitalize(w);
        })
    };

    const upper = s => toStr(s).toUpperCase();

    /*
    * Get string length
    * */
    const count = s => toStr(s).length;

    const uniqueArray = (a = []) => {
        let _a = [...a];
        for (let i = 0; i < _a.length; ++i) {
            for (let j = i + 1; j < _a.length; ++j) {
                if (_a[i] === _a[j])
                    _a.splice(j--, 1);
            }
        }

        return _a;
    };

    const countChars = (s, ignore) => chars$1(s, ignore).length;
    const countUniqueChars = (s, ignore) => uniqueArray(chars$1(s, ignore)).length;

    const countSubstr = (s, sub = "") => {
        let _s = toStr(s);
        let _sub = toStr(sub);
        return _s === '' || _sub === '' ? 0 : _s.split(_sub).length - 1;
    };

    const countWords = (s, pattern, flags) => words(s, pattern, flags).length;
    const countUniqueWords = (s, pattern, flags) => uniqueArray(words(s, pattern, flags)).length;

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

    const escapeHtml = s => toStr(s).replace(REGEXP_HTML_SPECIAL_CHARACTERS, replaceSpecialCharacter);

    const unescapeCharsMap = {
        '<': /(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,
        '>': /(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,
        '&': /(&amp;)|(&#x0*26;)|(&#0*38;)/gi,
        '"': /(&quot;)|(&#x0*22;)|(&#0*34;)/gi,
        "'": /(&#x0*27;)|(&#0*39;)/gi,
        '`': /(&#x0*60;)|(&#0*96;)/gi,
    };
    const chars = Object.keys(unescapeCharsMap);

    function reduceUnescapedString(string, key) {
        return string.replace(unescapeCharsMap[key], key);
    }

    const unescapeHtml = s => chars.reduce(reduceUnescapedString, toStr(s));

    const unique = (s, ignore) => uniqueArray(chars$1(s, ignore)).join("");

    const uniqueWords = (s, pattern, flags) => uniqueArray(words(s, pattern, flags)).join("");

    /*
    * Get substring from string.
    * */
    const substr = (s, start, len) => toStr(s).substr(start, len);

    /*
    * Get N first chars from string.
    * */
    const first = (s, len = 0) => substr(toStr(s), 0, len);

    /*
    * Get N last chars from string.
    * */
    const last = (s, len = 0) => {
      let _s = toStr(s);
      return _s ? substr(_s, _s.length - len) : '';
    };

    const MAX_SAFE_INTEGER = 0x1fffffffffffff;
    const BYTE_ORDER_MARK = '\uFEFF';

    const clip = (val, min, max = MAX_SAFE_INTEGER) => {
        if (val < min) return min;
        if (val > max) return max;
        return val;
    };

    const toInt = val => {
        if (val === Infinity) return MAX_SAFE_INTEGER;
        if (val === -Infinity) return -MAX_SAFE_INTEGER;
        return ~~val;
    };

    /*
    * Truncates `subject` to a new `length` with specified ending.
    * */
    const truncate = (s, len = 0, end = '...') => {
      let _s = toStr(s);
      let _len = !len ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER);

      return substr(_s, 0, _len) + (_s.length === _len ? '' : end)
    };

    /*
    * Slice string to N parts.
    * */
    const slice = (s, parts = 1) => {
      let _s = toStr(s);
      let res = [];
      let len = Math.round(_s.length / parts);

      for(let i = 0; i < parts; i++) {
        res.push(
          substr(_s, i * len, len)
        );
      }

      return res
    };

    /*
    * Truncates `subject` to a new `length` and does not break the words with specified ending.
    * */
    const prune = (s, len = 0, end = "") => {
        let _s = toStr(s);
        let _len = !len ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER);
        let _truncatedLen = 0;
        const pattern = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;

        _s.replace(pattern, (word, offset) => {
            const wordLength = offset + word.length;
            if (wordLength <= _len - end.length) {
                _truncatedLen = wordLength;
            }
        });

        return _s.substr(0, _truncatedLen) + end;
    };

    const repeat = (s, times = 0) => {
        let _s = toStr(s);
        let _times = !times ? _s.length : clip(toInt(times), 0, MAX_SAFE_INTEGER);
        const _origin = _s;

        if (times === 0) {
            return "";
        }

        for(let i = 0; i < _times - 1; i++) {
            _s += _origin;
        }

        return _s
    };

    const padBuilder = (pad, len = 0) => {
        const padLength = pad.length;
        const length = len - padLength;

        return repeat(pad, length + 1).substr(0, len)
    };

    const _pad = (s, pad = "", len = 0, left = false) => {
        let _s = toStr(s);
        let _len = !len ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER);
        let _padLen = pad.length;
        let _paddingLen = _len - _s.length;
        let _sideLen = _paddingLen;

        if (_paddingLen <= 0 || _padLen === 0) {return _s}

        let pads = padBuilder(pad, _sideLen);

        return left ? pads + _s : _s + pads
    };

    const lpad = (s, pad = ' ', len = 0) => {
        return _pad(s, len, pad, true)
    };

    const rpad = (s, pad = ' ', len = 0) => {
        return _pad(s, len, pad, false)
    };

    const pad = (s, pad = '', len = 0) => {
        let _s = toStr(s);
        let _len = !len ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER);
        let _padLen = pad.length;
        let _paddingLen = _len - _s.length;
        let _sideLen = toInt(_paddingLen / 2); //?
        let _remainingLen = _paddingLen % 2; //?

        if (_paddingLen <= 0 || _padLen === 0) {return _s}

        return padBuilder(pad, _sideLen) + _s + padBuilder(pad, _sideLen + _remainingLen) //?
    };

    const insert = (s, sbj = '', pos = 0) => {
        let _s = toStr(s);
        return _s.substr(0, pos) + sbj + _s.substr(pos)
    };

    const reduce = Array.prototype.reduce;
    const reduceRight = Array.prototype.reduceRight;

    const trim = (s, ws) => ltrim(rtrim(s, ws), ws);

    const ltrim = (s, ws) => {
        let _s = toStr(s);

        if (!ws) {return _s.replace(REGEXP_TRIM_LEFT, '')}
        if (ws === '' || _s === '') {return _s}
        if (typeof ws !== "string") {ws = '';}

        let match = true;

        return reduce.call(
            _s,
            (trimmed, char) => {
                if (match && ws.includes(char)) {
                    return trimmed;
                }
                match = false;
                return trimmed + char
            },
            ''
        );
    };

    const rtrim = (s, ws) => {
        let _s = toStr(s);

        if (!ws) {return _s.replace(REGEXP_TRIM_RIGHT, '')}
        if (ws === '' || _s === '') {return _s}
        if (typeof ws !== "string") {ws = '';}

        let match = true;

        return reduceRight.call(
            _s,
            (trimmed, char) => {
                if (match && ws.includes(char)) {
                    return trimmed
                }
                match = false;
                return char + trimmed
            },
            ''
        );
    };

    const endsWith = (s, end, pos) => toStr(s).endsWith(end, pos);

    const isAlpha = s => REGEXP_ALPHA.test(toStr(s));

    const isAlphaDigit = s => REGEXP_ALPHA_DIGIT.test(toStr(s));

    const isDigit = s => REGEXP_DIGIT.test(toStr(s));

    const isBlank = (s, strong = true) => strong ? toStr(s).length === 0 : trim(s).length === 0;

    const isEmpty = s => trim(s).length === 0;

    const isLower = s => lower(s) === s;

    const isUpper = s => upper(s) === s;

    const startWith = (s, start, pos) => toStr(s).startsWith(start, pos);

    const stripTagsAll = s => toStr(s).replace(REGEXP_TAGS, '');

    const stripTags = (s, allowed = []) => {
        let _s = toStr(s);
        let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;

        return _s.replace(tags, ($0, $1) => {
            return allowed.includes($1) ? $0 : ''
        })
    };

    /*
    * Original code
    * copyright (c) 2007-present by Alexandru Mărășteanu <hello@alexei.ro>
    * Source: https://github.com/alexei/sprintf.js
    * License: BSD-3-Clause License
    * */

    const re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    };

    function sprintf_format(parse_tree, argv) {
        let cursor = 1, tree_length = parse_tree.length, arg, output = '', ph, pad, pad_character, pad_length, is_positive, sign;

        for (let i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i];
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i]; // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor];
                    for (let k = 0; k < ph.keys.length; k++) {
                        if (typeof arg === "undefined") {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]];
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no];
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++];
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg();
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T'))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0;
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2);
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10));
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10);
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8);
                        break
                    case 's':
                        arg = String(arg);
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 't':
                        arg = String(!!arg);
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0;
                        break
                    case 'v':
                        arg = arg.valueOf();
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16);
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg;
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-';
                        arg = arg.toString().replace(re.sign, '');
                    }
                    else {
                        sign = '';
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' ';
                    pad_length = ph.width - (sign + arg).length;
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : '';
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg);
                }
            }
        }
        return output
    }

    const sprintf_cache = Object.create(null);

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        let _fmt = fmt, match, parse_tree = [], arg_names = 0;

        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0]);
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%');
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1;

                    let field_list = [], replacement_field = match[2], field_match = [];

                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1]);
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1]);
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1]);
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list;
                }
                else {
                    arg_names |= 2;
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                );
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length);
        }
        return sprintf_cache[fmt] = parse_tree
    }

    const sprintf = key => sprintf_format(sprintf_parse(key), arguments);
    const vsprintf = (fmt, argv) => sprintf.apply(null, [fmt].concat(argv || []));

    const includes = (s, sub, pos) => toStr(s).includes(sub, pos);

    const split = (str, sep = undefined, limit = undefined, trim = true) => {
        return toStr(str)
            .split(sep, limit)
            .map( el => trim ? el.trim() : el )
            .filter( el => trim ? !isEmpty(el) : true)
    };

    const strip = (str, what = null, replace = "") => {
        let _str = toStr(str);
        let regexp;

        if (!what) return _str

        regexp = new RegExp(what, "g");

        return _str.replace(regexp, replace)
    };

    const wrapTag = (s, tag = "div") => `<${tag}>${toStr(s)}</${tag}>`;
    const wrap = (s, before = "", after = "") => before + toStr(s) + after;

    const isString = s => typeof s === "string";

    const matches = (s, pattern, flags = '') => {
        let _s = toStr(s);
        let patternStr;

        if (!(pattern instanceof RegExp)) {
            patternStr = pattern ? trim(toStr(pattern)) : '';
            if (!patternStr) {
                return false
            }
            pattern = new RegExp(patternStr, flags);
        }
        return pattern.test(_s)
    };

    const append = (s, what = '', times = 1) => toStr(s) + repeat(what, times);

    const prepend = (s, what = '', times = 1) => repeat(what, times) + toStr(s);

    const stripBoom = s => {
        let _s = toStr(s);
        if (_s === '') return _s
        return _s[0] === BYTE_ORDER_MARK ? _s.substr(1) : _s
    };

    var f = {
        camelCase,
        capitalize,
        chars: chars$1,
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
        strip,
        isString,
        matches,
        append,
        prepend,
        stripBoom
    };

    class Str {
        constructor(v = "", mutable = true) {
            this.value = v.toString();
            this.mutable = mutable;
        }

        [Symbol.toPrimitive](hint){
            if (hint === "number") {
                return +this.value
            }

            return this.value
        }

        get [Symbol.toStringTag](){return "Str"}

        val(v){
            if (typeof v === "undefined" || v === null) return this.value
            this.value = v.toString();
            return this
        }

        get length(){
            return this.value.length
        }

        immutable(state = true){
            this.mutable = !state;
        }

        toString(){
            return this.value
        }

        _result(v){
            if (!this.mutable) {
                return str(v)
            }
            this.value = v;
            return this
        }

        camelCase(){
            return this._result(f.camelCase(this.value))
        }

        capitalize(strong){
            return this._result(f.capitalize(this.value, strong))
        }

        chars(ignore){
            return this._result(f.chars(this.value, ignore))
        }

        count(){
            return f.count(this.value)
        }

        countChars(ignore){
            return f.countChars(this.value, ignore)
        }

        countUniqueChars(ignore){
            return f.countUniqueChars(this.value, ignore)
        }

        countSubstr(sub){
            return f.countSubstr(this.value, sub)
        }

        countWords(pattern, flags){
            return f.countChars(this.value, pattern, flags)
        }

        countUniqueWords(pattern, flags){
            return f.countUniqueChars(this.value, pattern, flags)
        }

        dashedName(){
            return this._result(f.dashedName(this.value))
        }

        decapitalize(){
            return this._result(f.decapitalize(this.value))
        }

        endsWith(str, pos){
            return f.endsWith(this.value, str, pos)
        }

        escapeHtml(){
            return this._result(f.escapeHtml(this.value))
        }

        first(){
            return this._result(f.first(this.value))
        }

        includes(sub, pos){
            return f.includes(this.value, sub, pos)
        }

        insert(str, pos){
            return this._result(f.insert(this.value, str, pos))
        }

        isAlpha(){
            return f.isAlpha(this.value)
        }

        isAlphaDigit(){
            return f.isAlphaDigit(this.value)
        }

        isBlank(strong){
            return f.isBlank(this.value, strong)
        }

        isDigit(){
            return f.isDigit(this.value)
        }

        isEmpty(){
            return f.isEmpty(this.value)
        }

        isLower(){
            return f.isLower(this.value)
        }

        static isString(v){
            return f.isString(v)
        }

        isUpper(){
            return f.isUpper(this.value)
        }

        kebab(joinWith){
            return this._result(f.kebab(this.value, joinWith))
        }

        last(len){
            return this._result(f.last(this.value, len))
        }

        lower(){
            return this._result(f.lower(this.value))
        }

        matches(pattern, flags){
            return f.matches(this.value, pattern, flags)
        }

        pad(pad, len){
            return this._result(f.pad(this.value, pad, len))
        }

        lpad(pad, len){
            return this._result(f.lpad(this.value, pad, len))
        }

        rpad(pad, len){
            return this._result(f.rpad(this.value, pad, len))
        }

        prune(len, end){
            return this._result(f.prune(this.value, len, end))
        }

        repeat(times){
            return this._result(f.repeat(this.value, times))
        }

        append(str, times){
            return this._result(f.append(this.value, str, times))
        }

        prepend(str, times){
            return this._result(f.prepend(this.value, str, times))
        }

        reverse(ignore){
            return this._result(f.reverse(this.value, ignore))
        }

        shuffle(){
            return this._result(f.shuffle(this.value))
        }

        slice(parts){
            return this._result(f.slice(this.value, parts))
        }

        snake(){
            return this._result(f.snake(this.value))
        }

        split(sep, limit, trim){
            return this._result(f.split(this.value, sep, limit, trim))
        }

        sprintf(...args){
            return this._result(f.sprintf(this.value, ...args))
        }

        vsprintf(...args){
            return this._result(f.vsprintf(this.value, ...args))
        }

        startWith(str, pos){
            return f.startWith(this.value, str, pos)
        }

        stripBoom(){
            return this._result(f.stripBoom(this.value))
        }

        stripTags(allowed){
            return this._result(f.stripTags(this.value, allowed))
        }

        stripTagsAll(){
            return this._result(f.stripTagsAll(this.value))
        }

        strip(str, replace){
            return this._result(f.strip(this.value, str, replace))
        }

        substr(start, len){
            return this._result(f.substr(this.value, start, len))
        }

        swap(){
            return this._result(f.swap(this.value))
        }

        title(noSplit, sep){
            return this._result(f.title(this.value, noSplit, sep))
        }

        trim(ws){
            return this._result(f.trim(this.value, ws))
        }

        ltrim(ws){
            return this._result(f.ltrim(this.value, ws))
        }

        rtrim(ws){
            return this._result(f.rtrim(this.value, ws))
        }

        truncate(len, end){
            return this._result(f.truncate(this.value, len, end))
        }

        unescapeHtml(){
            return this._result(f.unescapeHtml(this.value))
        }

        unique(ignore){
            return this._result(f.unique(this.value, ignore))
        }

        uniqueWords(pattern, flags){
            return this._result(f.uniqueWords(this.value, pattern, flags))
        }

        upper(){
            return this._result(f.upper(this.value))
        }

        words(pattern, flags){
            return f.words(this.value, pattern, flags)
        }

        wrap(before, after){
            return this._result(f.wrap(this.value, before, after))
        }

        wrapTag(tag){
            return this._result(f.wrapTag(this.value, tag))
        }
    }

    Object.assign(Str, f);

    const str = v => new Str(v);

    globalThis.Str = Str;
    globalThis.str = str;

}());
