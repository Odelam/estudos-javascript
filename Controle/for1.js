let contador = 1
while(contador <= 10){
    console.log(`Contador = ${contador}.`)
    contador++
}

console.log('Até mais com while!')
console.log('')

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}.`)
}
console.log('Até mais com for!')
console.log('')

const notas = [2,5,4,3,4,5,5,6,6,4]
for(let i = 0; i < notas.length; i++){
    console.log(`Notas = ${notas[i]}.`)
}

console.log('Percorrendo os índices do array com for')