// forma menos moderna de criar uma variável em JS
// podemos criar com let
let nomeProduto = 'Caneta';
let quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var precoFinal = preco + imposto;

// dados
console.log(`Produto: ${nomeProduto}.`);
console.log(`Quantidade: ${quantidade}.`);
console.log(`Preço: ${preco}.`);
console.log(`Imposto: ${imposto}.`);
console.log(`Preço final: ${precoFinal}`);

nomeProduto = 'Caneta BIC';
console.log(nomeProduto);
