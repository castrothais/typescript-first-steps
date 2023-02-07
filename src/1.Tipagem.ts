// Tipagem Estática e Genérica

// TIPOS E SUBTIPOS

///Tipos Primitivos:
/// Boolean:
let sim: boolean = true;
let nao: boolean = false;

//String
let cidade: string = 'Belo Horizonte';
let estado: string = 'Mina Gerais'
let a: string;

//Number
let populacaoCidade: number = 2722000
let x: number;


//Void: existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado.

function sayHelloWorld(): void {
  console.log('Hello World!')
}

// null e undefined: são subtipos de todos os outros tipos.
let nullValue = null;
let undefinedValue = undefined;

// Declarar variável utilizando inferência tipo
let pi = 3.14;
console.log(`O valor de PI é ${pi}`, typeof pi)

// OBJETOS

let personObject: {
  nome: string,
  idade: number,
  habilidades: {
    jogar: boolean,
    natacao: boolean,
    habilitacao: boolean,
  }
} = {
  nome: 'Vinicius',
  idade: 25,
  habilidades: {
    jogar: true,
    natacao: true,
    habilitacao: false,
  }

}

type Habilidades = {
  jogar: true,
  natacao: true,
  habilitacao: false,
}

type Pessoa = {
  nome: string,
  idade: number,
  habilidades: Habilidades,
}

console.log(personObject);

let objPessoa: Pessoa = {
  nome: 'Daniel',
  idade: 42,
  habilidades: {
    jogar: true,
    natacao: true,
    habilitacao: false,
  }
}

console.log(objPessoa);

// ARRAYS

let array: number[] = [1,2,3]
console.log(array);

let arrayNomeIdade: (number|string)[] = ['Sara', 90]
arrayNomeIdade.push('hello') 

// TUPLAS
//permitem declarar um conjunto de valores cuja ordem e tipo dos valores são fix

let curso: [string, boolean] = ['Trybe', true]
let carro: [string, string, number] = ["Lancer", "Mitsubishi", 1];

// TYPE ALIASES
// Type Aliases (apelidos de tipos) são utilizados para declarar a forma de um objeto nomeando o tipo, o que nos permite usar o mesmo tipo mais de uma vez e nos referir a ele através de um único nome. 

type Points = {
  x: number,
  y: number,
}

const pointsPrint = (pt: Points) => {
  console.log(`Coordenada X é ${pt.x} e a Coordenada Y é ${pt.y}`)
}

pointsPrint({x: 30, y:90})



export {}