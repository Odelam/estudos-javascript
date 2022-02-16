function soBoaNoticia(nota){
    if (nota >= 7) {
        console.log('Aprovado com ', nota)
    }
}

soBoaNoticia(9.0)
soBoaNoticia(3.4)

function seForVerdadeEuFalo(valor){
    if(valor) {
        console.log('É verdade: ', valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 3])
seForVerdadeEuFalo({})