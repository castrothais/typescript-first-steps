"use strict";
// Tipagem Estática e Genérica
Object.defineProperty(exports, "__esModule", { value: true });
// TIPOS E SUBTIPOS
///Tipos Primitivos:
/// Boolean:
let sim = true;
let nao = false;
//String
let cidade = 'Belo Horizonte';
let estado = 'Mina Gerais';
let a;
//Number
let populacaoCidade = 2722000;
let x;
//Void: existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado.
function sayHelloWorld() {
    console.log('Hello World!');
}
// null e undefined: são subtipos de todos os outros tipos.
let nullValue = null;
let undefinedValue = undefined;
// Declarar variável utilizando inferência tipo
let pi = 3.14;
console.log(`O valor de PI é ${pi}`, typeof pi);
// OBJETOS
let personObject = {
    nome: 'Vinicius',
    idade: 25,
    habilidades: {
        jogar: true,
        natacao: true,
        habilitacao: false,
    }
};
console.log(personObject);
let objPessoa = {
    nome: 'Daniel',
    idade: 42,
    habilidades: {
        jogar: true,
        natacao: true,
        habilitacao: false,
    }
};
console.log(objPessoa);
// ARRAYS
let array = [1, 2, 3];
console.log(array);
let arrayNomeIdade = ['Sara', 90];
arrayNomeIdade.push('hello');
// TUPLAS
//permitem declarar um conjunto de valores cuja ordem e tipo dos valores são fix
let curso = ['Trybe', true];
let carro = ["Lancer", "Mitsubishi", 1];
const pointsPrint = (pt) => {
    console.log(`Coordenada X é ${pt.x} e a Coordenada Y é ${pt.y}`);
};
pointsPrint({ x: 30, y: 90 });
