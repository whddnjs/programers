function solution(a, b) {
  var answer = 0;
  // for (let i = 0; i < a.length; i++) {
  //   answer += a[i] * b[i];
  // }
  a.forEach((num, i) => {
    answer += num * b[i];
  });
  console.log(answer);
  return answer;
}
solution([1, 2, 3, 4], [-3, -1, 0, 2]);
