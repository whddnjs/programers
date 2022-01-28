function solution(new_id) {
  // 소문자변환
  var answer = new_id.toLowerCase();

  answer = answer.split('');
  // answer = answer.filter(item => {
  //   item !== '~' &&
  //     item !== '!' &&
  //     item !== '@' &&
  //     item !== '#' &&
  //     item !== '$' &&
  //     item !== '%' &&
  //     item !== '^' &&
  //     item !== '&' &&
  //     item !== '*' &&
  //     item !== '(' &&
  //     item !== ')' &&
  //     item !== '=' &&
  //     item !== '+' &&
  //     item !== '[' &&
  //     item !== ']' &&
  //     item !== '{' &&
  //     item !== '}' &&
  //     item !== ':' &&
  //     item !== '?' &&
  //     item !== ',' &&
  //     item !== '<' &&
  //     item !== '>' &&
  //     item !== '/';
  // });
  answer = answer.filter(item => {
    item !== '~';
  });

  console.log(answer);
  return answer;
}
solution('...!@BaT#*..y.abcdefghijklm');
