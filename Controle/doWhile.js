function getInteiroAleatorioEntre( min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao // somente iniciada a variável, sem valor inicial! Desta maneira garantimos que a estrutura irá rodar
// ao menos uma vez

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}.`)
} while (opcao != -1);

console.log('Até a próxima!')