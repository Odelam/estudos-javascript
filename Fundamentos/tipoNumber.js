const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(typeof(peso1), peso1);
console.log(typeof(peso2), peso2);
console.log('');
console.log(peso1, Number.isInteger(peso1));
console.log(peso2, Number.isInteger(peso2));

const avaliacao1 = 8.098;
const avaliacao2 = 5.786

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log('Média: ' + media.toFixed(2));
console.log('Média: ' + media.toString());
console.log('Média em binário: ' + media.toString(2));
console.log('Média é do tipo: ' + typeof(media));
console.log(`A função Number é to tipo: ${typeof(Number)}!`)
console.log('');

console.log(`9 / 7 = ${9/7}.`);
console.log(`"10" / 2 = ${"10"/2}.`);
console.log(`"10.2" / 2 = ${"10" / 2}.`);
console.log(`"10,2" / "2" = ${"10" / "2"}.`);
console.log(`"3" + 2: ${"3" + 2}.`); // string ganha;
console.log(`"3" - 2: ${"3" - 2}.`);
console.log(`"Show!" * 2 = ${"Show!" * 2}.`);
console.log(`0.1 + 0.7 = ${0.1 * 0.7}.`);
console.log(`7 / 0 = ${7 / 0}.`);
// console.log(10.toString()); isso gera um erro
console.log((10.543).toFixed(2));
