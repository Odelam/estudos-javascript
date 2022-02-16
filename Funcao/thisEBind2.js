function Pessoa(){
    this.idade = 0;

    const self = this

    setInterval(function(){ // a cada 1 segundo essa função anônima que foi passada dentro de setInterval irá ser chamada.
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa