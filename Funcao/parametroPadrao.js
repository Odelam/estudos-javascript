// estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) // zero retorna falso e as variáveis ficam com valor 1
console.log(' ');
console.log(' ');

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2())
console.log(soma2(0))
console.log(soma2(1, 1, 1))
console.log(soma2('oi ', 2, '8'))
console.log(' ');
console.log(' ');

// valor padrão do es2015, a melhor forma de escrever
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())
console.log(soma3(0))
console.log(soma3(1))
console.log(soma3('Oi ', 56, ' 2'))

