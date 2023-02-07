type Endereco = {
  rua: string,
  bairro: string,
}

type Profissao = {
  profissao: string,
  salario: number,
}

//Tipo Generico
function cadastro<T>(nome: string, idade:number, informacoes:T) {
  return {
    nome, 
    idade, 
    informacoes,
  }
}

const pessoa1 = cadastro<Endereco>('Maria', 40, {rua:'Rua das Neves', bairro: 'Cristal' })
const pessoa2 = cadastro<Profissao>('Maria', 40, {profissao:'desenvolvedora', salario: 25500})
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa2.informacoes.salario);


