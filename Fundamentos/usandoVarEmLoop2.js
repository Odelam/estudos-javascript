const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    });
}
// aqui sempre será retornado 10;
// como a variável var é global e irá guardar sempre o último
// número do array;
funcs[2]();
funcs[8]();