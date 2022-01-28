// function solution(absolutes, signs) {
//   var answer = 0;

//   for (let i = 0; i < absolutes.length; i++) {
//     signs[i] === true
//       ? (answer += absolutes[i])
//       : (answer += absolutes[i] * -1);
//   }

//   return answer;
// }
// solution([4, 7, 12], [true, false, true]);

function solution(absolutes, signs) {
  var answer = 0;

  absolutes.forEach((num, i) => {
    signs[i] ? (answer += num) : (answer += num * -1);
  });
  console.log(answer);
  return answer;
}
solution([4, 7, 12], [true, false, true]);
