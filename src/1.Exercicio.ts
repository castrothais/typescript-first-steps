// Calcular a aŕea de um quadrado e triangulo :

const areaQuadrado = (lado: number): number => {
  return lado**2;
}

console.log(areaQuadrado(10))

const areaTriangulo = (base: number, altura: number): number => {
  return (base * altura)/2;
}

console.log(areaTriangulo(30,10));


// Perímetro de um Polígono
function perimetroPoligono (array:number[]): number{
  return array.reduce((acc: number, el: number)=> acc + el, 0)
}

console.log(perimetroPoligono([4,4,4,4]));



export {}