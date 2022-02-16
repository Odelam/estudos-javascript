let valor; // não inicializada
console.log(valor);

valor = null // ausência de valor
console.log(valor);
console.log(typeof(valor));
// console.log(valor.toString()); Erro!!!
console.log('');
const produto = {};
console.log(produto.preco);
console.log(produto);
produto.preco = 3.56;
console.log(produto);
console.log('');
produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
console.log(produto);
// delete produto.preco;
console.log(produto.preco);
console.log('');

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);



