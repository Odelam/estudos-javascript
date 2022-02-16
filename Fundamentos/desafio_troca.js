let a = 7;
let b = 94;

tempB = b;
tempA = a;

a = tempB;
b = tempA;

console.log('Antes - A: ' + tempA);
console.log('Antes - B: ' + tempB);
console.log('');

console.log('Depois - A: ' + a);
console.log('Depois - B: ' + b);

// outra maneira
let a1 = 7;
let b1 = 94;

let temp = a1; // valor de a1 fica guardada na variável temp;
a1 = b1; 
b1 = temp;

console.log('');
console.log('A: ' + a1);
console.log('B: ' + b1);

// outra maneira
 let a2 = 7;
 let b2 = 94;

 [a2, b2] = [b2, a2]; // momento da troca da variável

 console.log('');
 console.log('A: ' + a2);
 console.log('B: ' + b2);
 
