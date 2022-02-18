
// classe
class Pessoa {
    constructor(nome, idade, sexo, altura, peso) {
        this.nome = nome,
        this.idade = idade,
        this.sexo = sexo,
        this.altura = altura,
        this.peso = peso
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Del', 32, 'Masculino', 1.66, 60)
p1.falar()
console.log(p1)


// factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Odelam')
p2.falar()
