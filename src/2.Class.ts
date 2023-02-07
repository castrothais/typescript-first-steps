// CLASSES EM TYPESCRIPT

class Calculadora {
  // Atributos: Propriedades com cada tipo 
  num1: number;
  num2: number;
  num3: number;

  // O que tem que ser feito durante a inicialização da classe
  constructor(num1: number,num2: number,num3: number) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
  }

  //Métodos: são as ações que os objetos podem exercer quando solicitados, onde podem interagir e se comunicarem com outros objetos.

  soma() {
    return this.num1 + this.num2;
  }

  subtração() {
    return this.num3 - this.num2;
  }

  divisao() {
    return this.num3/this.num1
  }

  nultiplicacao() {
    return this.num1 * this.num2;
  }
}

let calc1 = new Calculadora(10,2,55);
console.log(calc1.soma());
console.log(calc1.subtração());
console.log(calc1.divisao());
console.log(calc1.nultiplicacao());

export {}