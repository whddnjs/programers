// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  var answer = 0;

  var str = s;
  str = str.replace(/zero/i, '0');
  str = str.replace(/one/g, '1');
  str = str.replace(/two/g, '2');
  str = str.replace(/three/g, '3');
  str = str.replace(/four/g, '4');
  str = str.replace(/five/g, '5');
  str = str.replace(/six/g, '6');
  str = str.replace(/seven/g, '7');
  str = str.replace(/eight/g, '8');
  str = str.replace(/nine/g, '9');

  answer = Number(str);

  return answer;
}

console.log(solution('one4seveneight'));
