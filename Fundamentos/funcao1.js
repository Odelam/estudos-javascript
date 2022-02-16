// funçao sem retorno
// aqui poderíamos chamar a função fora do console.log()
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // preenchendo os dois parâmetros
imprimirSoma(2); // ele pega o 2 e tenta somar com o 'Indefined' e dá NaN
imprimirSoma(2, 10, 23, 43, 44, 4, 6) // pega somente os dois parâmetros e ignora o resto
imprimirSoma(); // sem parâmetros gera NaN
console.log('');

// função com retorno
function soma(a, b = 0) {
    return a + b;
}
// para aparecer no console temos que colocar a função
// dentro do console.log(), pois ela tem o return, tem
//retorno
console.log(soma(2, 3));
console.log(soma(2));