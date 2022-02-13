function solution(s) {
  const arr = s.split('');

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }
  return arr.length > 0 ? 0 : 1;
}
console.log(solution('cdcd'));
