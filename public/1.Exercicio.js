"use strict";
// Calcular a aŕea de um quadrado e triangulo :
Object.defineProperty(exports, "__esModule", { value: true });
const areaQuadrado = (lado) => {
    return lado ** 2;
};
console.log(areaQuadrado(10));
const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
};
console.log(areaTriangulo(30, 10));
// Perímetro de um Polígono
function perimetroPoligono(array) {
    return array.reduce((acc, el) => acc + el, 0);
}
console.log(perimetroPoligono([4, 4, 4, 4]));
