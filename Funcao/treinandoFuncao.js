const velocidadeMedia = function (distancia, intervaloDeTempo){
    return distancia/intervaloDeTempo
}
console.log(velocidadeMedia(12.000, 3))

const velocidadeMedia1 = (distancia, intervaloDeTempo) => {return distancia/intervaloDeTempo}
console.log(velocidadeMedia1(122.00, 454))

const funcHorarioDeslocamento = (pInicial, vel, intervalTempo) => {
    return pInicial + vel * intervalTempo
}
console.log(funcHorarioDeslocamento(3,454, 3))

const movUniformeVariado = (variVelocidade, intervalTempo) => {
    return variVelocidade / intervalTempo
}
console.log(movUniformeVariado(788,4))