function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

//TEST

console.log(arrayDiff([1, 2, 3], [1, 2]));
