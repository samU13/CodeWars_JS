// Solucion propia
// var min = function (list) {

//     return Math.min(...list);
// }

// var max = function (list) {

//     return Math.max(...list);
// }

// Mejor solucion

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//TEST

let numeros = [-1, -2, 33, 44, 55, -22];
console.log(max(numeros));
console.log(min(numeros));
