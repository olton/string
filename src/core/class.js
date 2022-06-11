import f from "./functions"

class Str {
    constructor(v = "", {mutable = true} = {}) {
        this.value = v.toString()
        this.mutable = mutable
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
        this.value = v.toString()
        return this
    }

    get length(){
        return this.value.length
    }

    immutable(state = true){
        this.mutable = !state
    }

    toString(){
        return this.value
    }

    _result(v){
        if (!this.mutable) {
            return str(v)
        }
        this.value = v
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

    shorten(l, d){
        return this._result(f.shorten(this.value, l, d))
    }
}

Object.assign(Str, f)

const str = v => new Str(v)

export {
    Str,
    str
}