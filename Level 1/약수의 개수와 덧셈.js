// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서,
// 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  var answer = 0;

  const arr = [];
  for (let i = left; i <= right; i++) {
    arr.push(i);
  }

  arr.forEach(num => {
    const 약수 = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        약수.push(i);
      }
    }

    약수.length % 2 === 0 ? (answer += num) : (answer -= num);
  });

  return answer;
}

solution(13, 17);
