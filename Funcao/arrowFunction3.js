let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global) //true, aponta para o global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false, não aponta para global
comparaComThis(obj) // true, aponta para obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)