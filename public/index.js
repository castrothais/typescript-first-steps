"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome = 'Thaís';
let age = 26;
let retiree = false;
console.log("nome:", nome);
console.log("idade:", age);
console.log("aposentado:", retiree);
let array = [1, 2, 3];
// let age: number|string = 26; Operador de União
const somanumeros = (numero1, numero2) => {
    return numero1 + numero2;
};
console.log(somanumeros(2, 4));
const mediaAluno = (arr, aluno) => {
    const media = arr.reduce((acc, el) => acc + el, 0) / arr.length;
    return `A media de ${aluno} foi ${media}`;
};
console.log(mediaAluno([40, 60, 80, 90], 'Thaís'));
var httpStatus;
(function (httpStatus) {
    httpStatus[httpStatus["ok"] = 200] = "ok";
    httpStatus[httpStatus["created"] = 201] = "created";
    httpStatus[httpStatus["internalServerErres"] = 500] = "internalServerErres";
})(httpStatus || (httpStatus = {}));
console.log(httpStatus.ok);
var statuStudents;
(function (statuStudents) {
    statuStudents[statuStudents["approved"] = 0] = "approved";
    statuStudents[statuStudents["recovery"] = 1] = "recovery";
    statuStudents[statuStudents["reproachful"] = 2] = "reproachful";
})(statuStudents || (statuStudents = {}));
console.log(statuStudents.approved);
console.log(statuStudents.recovery);
console.log(statuStudents.reproachful);
