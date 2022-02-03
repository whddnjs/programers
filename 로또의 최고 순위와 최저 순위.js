// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  var answer = [];
  let low_count = 0;

  // lottos, win_nums 같은숫자 세기
  lottos.forEach(lo_item => {
    win_nums.forEach(win_item => {
      if (lo_item === win_item) {
        low_count++;
      }
    });
  });

  // lottos 0갯수 세기
  let zero = lottos.filter(item => item === 0);

  // 최저순위 배열에 넣기
  switch (low_count) {
    case 6:
      answer.unshift(1);
      break;
    case 5:
      answer.unshift(2);
      break;
    case 4:
      answer.unshift(3);
      break;
    case 3:
      answer.unshift(4);
      break;
    case 2:
      answer.unshift(5);
      break;
    default:
      answer.unshift(6);
      break;
  }

  // 최고순위 배열에 넣기
  switch (zero.length + low_count) {
    case 6:
      answer.unshift(1);
      break;
    case 5:
      answer.unshift(2);
      break;
    case 4:
      answer.unshift(3);
      break;
    case 3:
      answer.unshift(4);
      break;
    case 2:
      answer.unshift(5);
      break;
    default:
      answer.unshift(6);
      break;
  }

  return answer;
}

console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
