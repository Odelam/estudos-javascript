// par chave/valor
const saudacao = 'Opa' // contexto léxico 1 (local do qual físico que sua variável foi definida)

function exec(){
    const saudacao = 'Olá!' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 33,
    peso: 45,
    endereco : {
        logradouro: 'Rua Meneses de Moraes',
        numero: 234
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);