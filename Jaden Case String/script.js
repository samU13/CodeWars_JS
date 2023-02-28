// String.prototype.toJadenCase = function () {
//   function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   return this.split(" ").map(capitalizeFirstLetter).join(" ");
// };

//MEJOR SOLUCION
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
//TEST
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
