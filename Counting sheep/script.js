//Solucion propia

// function countSheeps(arrayOfSheep) {
//     let total = 0;
//     arrayOfSheep.forEach(sheep => {
//         if (sheep === true) total += 1;
//     });
//     return total;
// }

//Mejor solucion

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

//TEST

let obejas = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
console.log(countSheeps(obejas));
