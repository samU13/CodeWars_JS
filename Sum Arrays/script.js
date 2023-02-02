// Solucion propia

// Sum Numbers
// function sum(numbers) {
//     if (numbers.lenght === 0) return 0;
//     let total = 0;
//     numbers.forEach(number => {
//         total += number;

//     });
//     return total;
// };
// let num1 = [1, 2, 3, 4];
// let num2 = [-1, -2, 4, 5];
// console.log(sum(num1));
// console.log(sum(num2));

// Mejor solucion

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

//TEST

let num1 = [1, 2, 3, 4];
let num2 = [-1, -2, 4, 5, -10.5];
console.log(sum(num1));
console.log(sum(num2));
