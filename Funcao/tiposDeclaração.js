console.log(soma(3, 4)) // um dos benefícios de se usar uma função declarada é que podemos chamá-la com antecedência
// pq o javascript primeiro lê todas as funções e depois as executa.

console.log(sub(3, 4)) // esse código irá gerar um erro, pq ele vai dizer que sub não está definido.

console.log(mult(3, 4)) // essa função tbm irá gerar um erro, temos que chamar ela depois da declaração.

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}

// named function expression
const mult = function mult(x,y) {
    return x * y
}