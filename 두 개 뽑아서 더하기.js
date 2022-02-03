// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수
// 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var arr = [];
  numbers.forEach((num1, num1_idx) => {
    numbers.forEach((num2, num2_idx) => {
      if (num1_idx !== num2_idx) {
        arr.push(num1 + num2);
      }
    });
  });
  const answer = [...new Set(arr)].sort((a, b) => {
    return a - b;
  });

  return answer;
}
console.log(solution([2, 1, 3, 4, 1]));
