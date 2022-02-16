console.log(typeof console);
console.log(Math.ceil(4.2));
const objeto1 = {};
objeto1.nome = 'Bola';
console.log(objeto1.nome);

function Obj (nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Executando a função.')
    }
}

const obj2 = new Obj('Cadeira');
const bjt3 = new Obj('Mesa');
console.log(obj2);
console.log(bjt3);
obj2.exec();

