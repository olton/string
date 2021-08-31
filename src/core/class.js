import f from "./functions"

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

    toString(){
        return this.value
    }

    camelCase(){
        if (!this.mutable) {
            return str(f.camelCase(this.value))
        }
        this.value = f.camelCase(this.value)
        return this
    }

    capitalize(strong){
        if (!this.mutable) {
            return str(f.capitalize(this.value, strong))
        }
        this.value = f.capitalize(this.value, strong)
    }
}

const str = v => new Str(v)

export {
    Str,
    str
}