let dobro = function(a){
    return 2 * a
}

//funções arrow sempre é uma função anônima e vc terá que criar uma variável para chama-la
dobro = (a) => {
    return 2 * a
}

// função arrow de uma linha, return implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá' // vc pode criar uma função sem parâmetros
ola = _ => 'Olá' // vc pode criar uma função sem parâmetros dessa maneira
console.log(ola())
