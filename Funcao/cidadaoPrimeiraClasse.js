// A função é como um dado em JS
// Função em JS First-Class Object (Citizens)

// Criar uma função de forma literal
function func1(a, b) {
    return a - b
}

// Armazenando uma função em uma variável
const func2 = function (a, b){
    return a / b
}

// Armazenando função em um array
const array = [function (a, b) {return a + b}, func1, func2]
console.log(array[0](2, 3)) // acessando a primeira função do array
console.log(array[1](2, 2)) // acessando a segunda função do array
console.log(array[2](4,4)) // acessando a terceira função do array

// Armazenando em um atributo de objeto 
const obj = {}
obj.falar = function () { return 'Olá'}
console.log(obj.falar())

// Passar função como parâmetros para outra função
function run(fun){
    fun()
}
run (function () {console.log('Executando...')})

// Uma função pode retornar/conter uma outra função

function soma (a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(1) // chamar diretamente

// salvei o resultado soma em uma variável
const resultadoFunctionSoma = soma(2, 3) // forma padrão de fazer

// chamando a segunda função dentro de soma
resultadoFunctionSoma(2)





