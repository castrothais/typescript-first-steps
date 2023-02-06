let nome: string = 'Thaís';
let age: number = 26;
let retiree: boolean = false;
console.log("nome:", nome);
console.log("idade:", age);
console.log("aposentado:", retiree);

let array: number[] = [1,2,3]
// let age: number|string = 26; Operador de União

const somanumeros = (numero1: number, numero2: number): number => {
  return numero1 + numero2;
}
console.log(somanumeros(2,4))

const mediaAluno = (arr: number[],aluno: string): string => {
  const media: number = arr.reduce((acc:number, el: number):number => acc + el, 0) / arr.length;
  return `A media de ${aluno} foi ${media}`
}
console.log(mediaAluno([40,60,80,90], 'Thaís'))


enum httpStatus{
  ok = 200,
  created = 201,
  internalServerErres = 500,
}
console.log(httpStatus.ok)


enum statuStudents {
  approved,
  recovery,
  reproachful,
}
console.log(statuStudents.approved)
console.log(statuStudents.recovery)
console.log(statuStudents.reproachful)

export {};