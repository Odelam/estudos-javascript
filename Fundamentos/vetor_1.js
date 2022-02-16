function vetor() {
    let vetorzinho = [1, 3, 5, 7, 9]
    let achou = false

    let numero = prompt("Qual número deseja procurar?")

    for (let index = 0; index < vetorzinho.length; index++) {
        if (vetorzinho[index] === numero) {
            console.log(`Encontrado na posição: ${index}!`)
            achou = true
        }

    }
    if (achou != true) {
        console.log(`O número não está no vetor!`)
    }
}



vetor()
