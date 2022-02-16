function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// função que retorna valores randomicos entre o min e o max especificados
console.log(rand({max: 50, min: 40}));
console.log(rand({min: 955}));
console.log(rand({}));
// console.log(rand()) código gera erro pq não existe obetos pra
// desestruturar.

