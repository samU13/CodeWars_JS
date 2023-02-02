function descendingOrder(n) {
  return parseInt((n + "").split("").sort().reverse().join(""));
}

//TEST

let num = 5552234134124;
console.log(descendingOrder(num));
