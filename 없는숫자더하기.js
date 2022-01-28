function solution(numbers) {
  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  return 45 - sum;
}
solution([5, 8, 4, 0, 6, 7, 9]);
