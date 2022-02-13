// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    let result = true;
    s.split('').forEach(item => {
      if (item - Number(item) !== 0) {
        result = false;
      }
    });
    return result;
  }
  return false;
}
console.log(solution('12a234'));

// console.log(isNaN('a')); 숫자인지 확인하는 함수
