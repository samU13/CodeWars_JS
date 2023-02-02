function invert(array) {
  return array.map((num) => num * -1);
}

//TEST
console.log(invert([1, 2, 3, 4, 5]), invert([1, -2, 3, -4, 5]));
