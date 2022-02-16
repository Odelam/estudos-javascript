// novo recurso do ES2015
// desestruturando a partir de um objeto

const pessoa = {
    nome: 'Odelam',
    idade: 55,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 234
    }
}

const { nome, idade} = pessoa; // esse é o destructuring,
// estamos extraindo o nome e a idade da estrutura da class pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa
console.log(`Nome: ${n}, Idade: ${i}.`);

const {sobrenome, bomHumor = true} = pessoa;
console.log(sobrenome, bomHumor);

// desestruturando dados aninhados
const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);