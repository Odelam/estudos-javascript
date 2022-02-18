function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 3876.45))
console.log(criarProduto('SmartPhone Tijolão', 1200.50))
console.log(criarProduto())
console.log(typeof(criarProduto('Notebook', 3876.45)))
console.log(typeof(criarProduto()))