function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

//TEST
let arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
console.log(findNeedle(arr));
