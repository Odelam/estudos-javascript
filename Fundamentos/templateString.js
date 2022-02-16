const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`
console.log(`Contanação: ${concatenacao}
            Template String: ${template}.`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('Cuidado')}!`);