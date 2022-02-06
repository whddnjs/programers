function solution(s) {
  var answer = '';

  let str_arr = s.split(' ');

  console.log(str_arr);

  const gd = str_arr.map(item => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] % 2 === 0) item[i].toUpperCase();
    }
  });

  console.log(gd);
  return answer;
}
solution('try hello world');
