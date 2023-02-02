function solution(str, ending) {
  return str.endsWith(ending);
}

//TEST
console.log(solution("abc", "bc"), solution("abc", "d"));
