function solution(nums) {
  var answer = 0;
  // 가져갈수있는종류갯수
  const takeCount = nums.length / 2;
  // nums의 안의 값 중복 제거
  const set = new Set(nums);
  // 중복 제거한 값 배열에 담기
  const arr = [...set];

  // 총 폰켓몬의 종류 갯수가 가져갈 수 있는 갯수보다 크거나 같다면
  // 가져갈 수 있는 갯수를 리턴
  // 적다면 총 폰켓몬 종류 갯수를 리턴
  arr.length >= takeCount ? (answer = takeCount) : (answer = arr.length);

  console.log(answer);
  return answer;
}

solution([3, 3, 3, 4, 2, 2]);
