var numero = 1;
{
    var numero = 2;
    console.log(`Dentro: ${numero}.`);
}
// tanto dentro quanto fora ele vale 2. Pois o var ele
// ignora blocos, somente em funções que o var
// é global somente no escopo da função.
console.log(`Fora: ${numero}.`);
