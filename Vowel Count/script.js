function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

//TEST

console.log(getCount("abracadabra"));
console.log(getCount("my pyx"));
