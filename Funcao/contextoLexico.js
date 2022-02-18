const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFuncao()
}

exec() // por sua vez irá chamar a função exec(), que dentro dela irá ser executada a função minhaFunção()
// dentro de minhaFunção() ela printa o variável valor, como ela não encontra essa variável em seu contexto,
// a função então busca esse valor numa camada acima dela, no escopo global. Por isso ela não executa o valor
// que está dentro da função exec()

