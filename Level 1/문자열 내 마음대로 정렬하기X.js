function solution(strings, n) {
  var answer = strings.sort((a, b) => a[n] - b[n]);
  console.log(answer);
  return answer;
}
solution(['sun', 'bed', 'car'], 1);
