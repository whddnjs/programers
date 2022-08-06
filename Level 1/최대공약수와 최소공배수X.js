// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
  var answer = [];
  // 최대공약수
  const n약수 = [];
  const m약수 = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      n약수.push(i);
    }
  }
  for (let i = 1; i <= m; i++) {
    if (m % i === 0) {
      m약수.push(i);
    }
  }
  console.log(n약수);
  console.log(m약수);
  const 최대공약수 = Math.max(...n약수.filter(n => m약수.some(m => n === m)));
  answer.push(최대공약수);
  // 최소공배수

  // return answer;
}

solution(3, 12);
