// armaenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

const imprimirDivisao = function (num1, num2) {
    return num1 % num2;
}

console.log(imprimirDivisao(2, 2));
console.log('');

// armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3));
console.log('');

// recurso do arrow function, retorno implícito
const subtracao = (a, b) => a - b; // quando temos uma arrow
console.log(subtracao(2, 4));
// function de apenas uma linha, ela tem return implicitamente
// const subtracao  =   (a, b)          =>               a - b
// NOME DA FUNÇÃO   = PARÂMETROS   ARROW FUNCTION      OPERAÇÃO

//arrow function com 1 parâmetro somente
const imprimir = a => console.log(a);
imprimir(`Essa é uma Arrow Function de
somente 1 parâmetro!!!`);

const multiplica = (k, l) => k * l;
console.log(multiplica(2, 2));

const expressao = (v_a, v_b, v_c) => console.log(v_a * (v_b - v_c));
expressao(2, 1, 1 );