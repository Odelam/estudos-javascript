function tabuadinha(num) {
    let contador = 0;
    let limite = 10;
    let resultado = 0;

    do {
        resultado = num * contador;
        console.log(`${num} X ${contador} = ${resultado}.`);
        contador++;

    } while (contador <= limite);
}

tabuadinha(3);
