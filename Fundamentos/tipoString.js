const nome = "Odelam";
let sobreNome = "Sá";

console.log(`Função pra pegar uma letra de um índice do caracter: ${nome.charAt(5)}.`);
console.log(`Pegar um índice maior que a string: ${nome.charAt(12)}.`);
console.log(`Função pra pegar o índice mas o valor da tabela ASCII: ${nome.charCodeAt(5)}.`);
console.log(`.indexOf('m'): ${nome.indexOf('m')}`);
console.log(`.indexOf('K'): ${nome.indexOf('K')}`);
console.log(`.substring(0): ${nome.substring(0)}.`);
console.log(`.substring(1): ${nome.substring(1)}.`);
console.log(`.substring(2): ${nome.substring(2)}.`);
console.log(`.substring(3): ${nome.substring(3)}.`);
console.log(`.substring(4): ${nome.substring(4)}.`);
console.log(`.substring(5): ${nome.substring(5)}.`);
console.log(`.substring(12): ${nome.substring(12)}.`);
console.log();
console.log('Nome '.concat(nome).concat(" Dias"));
console.log('Nome: ' + nome + " " + sobreNome + " Dias" + " de " + " Souza");
console.log(nome.replace('O', 'H'));
console.log('Ana,Maria,Pedro'.split(','));
console.log('Ana,Maria,Pedro'.split('/,/'));// regex
console.log('Ana,Maria,Pedro'.split('/./'));// regex