// n학생수 lost도난당한학생번호배열 reserve빌려주는학생번호배열
function solution(n, lost, reserve) {
  var answer = 0;
  let newLost = lost;
  let newReserve = reserve;
  // 도난 당한사람이 여유복 있는 사람인지 체크
  const 중복 = lost.filter(item => reserve.includes(item));
  if (중복.length > 0) {
    console.log(`${중복.length}개 ${중복}`);

    // 두배열의 중복값 제거한 새로운 배열 생성
    newLost = lost.filter(item => !중복.includes(item));
    console.log(newLost);
    newReserve = reserve.filter(item => !중복.includes(item));
    console.log(newReserve);
  }

  reserve.filter(item => lost.includes(item + 1 || item - 1));

  return answer;
}

solution(5, [2, 4, 6], [1, 3, 5, 6]);
