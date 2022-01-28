function solution(id_list, report, k) {
  var answer = [];

  const obj = id_list.map(id => {
    return {
      name: id,
      신고횟수: 0,
      신고당한횟수: 0,
    };
  });
  // 중복신고제거
  let newReport = [...new Set(report)];

  let 신고정리 = report.map(item => {
    return item.split(' ');
  });
  console.log(신고정리);

  신고정리.forEach(신고정리 => {});
  console.log(obj[name === 'muzi']);
  console.log(obj);
  return answer;
}
solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2
);
