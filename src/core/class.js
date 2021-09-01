import f from "./functions"
import {countUniqueChars} from "../plugins/count_chars";
import {decapitalize} from "../plugins/decapitalize";
import {escapeHtml} from "../plugins/escape_html";

class Str {
    constructor(v, mutable = true) {
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

    get val(){
        return this.value
    }

    set val(v){
        this.value = v.toString()
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

    camelCase(){
        const _val = f.camelCase(this.value)
        if (!this.mutable) {
            return str(_val)
        }
        this.value = _val
        return this
    }

    capitalize(strong){
        const _val = f.capitalize(this.value, strong)
        if (!this.mutable) {
            return str(_val)
        }
        this.value = _val
        return this
    }

    chars(ignore){
        const _val = f.chars(this.value, ignore)
        if (!this.mutable) {
            return str(_val)
        }
        this.value = _val
        return this
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
        const _val = f.dashedName(this.value)
        if (!this.mutable) {
            return str(_val)
        }
        this.value = _val
        return this
    }

    decapitalize(){
        const _val = f.decapitalize(this.value)
        if (!this.mutable) {
            return str(_val)
        }
        this.value = _val
        return this
    }

    endsWith(str, pos){
        return f.endsWith(this.value, str, pos)
    }

    escapeHtml(){
        const _val = f.escapeHtml(this.value)
        if (!this.mutable) {
            return str(_val)
        }
        this.value = _val
        return this
    }

    first(){
        const _val = f.first(this.value)
        if (!this.mutable) {
            return str(_val)
        }
        this.value = _val
        return this
    }

    includes(sub, pos){
        return f.includes(this.value, sub, pos)
    }

    insert(str, pos){
        const _val = f.insert(this.value, str, pos)
        if (!this.mutable) {
            return str(_val)
        }
        this.value = _val
        return this
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
}


const str = v => new Str(v)

export {
    Str,
    str
}