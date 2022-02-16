const notas = [5.6, 7.8, 6.8, 3.4, 5.5]

for (let i in notas){
    console.log(i, notas[i])
}

console.log('Até mais for in')
console.log('')

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Souza',
    idade: 45,
    peso: 66
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log('Acessando uma classe com for in')

