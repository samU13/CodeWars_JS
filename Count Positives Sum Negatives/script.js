//Solucion propia

function countPositivesSumNegatives(input) {
  let contadorPositivos = 0;
  let sumaNegativos = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) =>
      num > 0 ? contadorPositivos++ : (sumaNegativos += num)
    );
  }
  return [contadorPositivos, sumaNegativos];
}

//TEST

let arraynumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(arraynumeros));

// Mejor solucion

// function countPositivesSumNegatives(input) {
//     return !input || !input.length ? [] : [
//         input.filter(n => n > 0).length,
//         input.filter(n => n < 0).reduce((a, b) => a + b)
//     ];
// }
