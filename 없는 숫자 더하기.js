// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let sum = 0;

  for (let i = 1; i <= 9; i++) {
    if (!numbers.includes(i)) sum += i;
  }

  return sum;
}
solution([1, 2, 3, 4, 6, 7, 8, 0]);

// function solution(numbers) {
//   let sum = 0;
//   numbers.forEach(num => {
//     sum += num;
//   });
//   return 45 - sum;
// }
// solution([5, 8, 4, 0, 6, 7, 9]);
