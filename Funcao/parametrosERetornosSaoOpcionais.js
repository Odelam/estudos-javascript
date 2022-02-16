function area (largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

area(300, 400)
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 5)) // nesse cenário, o JS ignora os que não são os 2 parâmetros iniciais
console.log(area(5,5)) // é > 20, como não tem um retorno especificado o retorno vem como undefined
