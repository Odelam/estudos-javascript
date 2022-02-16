// criando um objeto e atribuindo por referência
const a = {name: 'testando'};
console.log(a);
console.log('');
const b = a;
b.name = 'Olá!';
console.log(`a: ${a.name}.`);
console.log(`b: ${b.name}.`);
console.log('');
let c = 3; // tipos primitivos fazemos uma cópia por valor;
let d = c; // diferente de fazer por referência q quer dizer
d++; // que apontamos pro mesmo lugar da memória, ou seja, na fonte
console.log(`c: ${c}.`);
console.log(`d: ${d}.`);