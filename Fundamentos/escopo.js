let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)

abc = 44 // não faça isso, assim define como global
console.log(globalThis.abc)