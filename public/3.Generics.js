"use strict";
//Tipo Generico
function cadastro(nome, idade, informacoes) {
    return {
        nome,
        idade,
        informacoes,
    };
}
const pessoa1 = cadastro('Maria', 40, { rua: 'Rua das Neves', bairro: 'Cristal' });
const pessoa2 = cadastro('Maria', 40, { profissao: 'desenvolvedora', salario: 25500 });
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa2.informacoes.salario);
