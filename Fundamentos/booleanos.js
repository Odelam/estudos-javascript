let isAtivo = false;
console.log(isAtivo);
console.log('');
isAtivo = true
console.log(isAtivo);
isAtivo = 1;
console.log(!!isAtivo); // negação da negação volta a ser original
console.log(!isAtivo);
isAtivo = 0;
console.log(isAtivo);
console.log(!!isAtivo);
console.log('');
console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'testando');
console.log(!!{});
console.log(!!Infinity);
console.log('');
console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log('Expressão: ' + !!('' || null || 0 || ' '));
console.log();
let nome1 = '';

// caso o nome não for preenchido, vai mostrar a string 'Descohecido'
console.log(nome1 || 'Desconhecido');
console.log();

let nome2 = 'Odelam';
// se o nome tiver preenchido, mostrará o valor da variável
console.log(nome2 || 'Desconhecido');
console.log();

