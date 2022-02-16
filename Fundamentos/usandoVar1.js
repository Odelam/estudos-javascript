{
    { 
        {
            { 
             var sera = 'Será???'
            } 
        }
    }
}
console.log(sera); // variável var é visível pra todos q tiver fora do bloco

function teste() {
    var local = 1234;
    console.log(local);
}
teste();
// console.log(local); não conseguimos acessar variável var
// de fora da função
globalThis.local = 1;
console.log('Tipo ' + typeof(globalThis.local));
console.log(local);
// acima, mesmo criando uma variável var dentro da função
// podemos acessá-la com a classe global, no caso do Node
// é globalThis.<variável>. Evite usar var por problema de
// escopo de variável