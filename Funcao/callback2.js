const notas = [3.3, 4.5, 7.7, 6.6, 5.6, 8.8, 9.9, 6.8]

// sem callback
const notasBaixas1 = []
for(let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

// callback com função arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// deixando mais elegante
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)