function disemvowel(str) {
  return str.match(/[^aeiou]/gi).join("");
}

//TEST

console.log(disemvowel("This website is for losers LOL!"));
