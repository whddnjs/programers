function solution(numbers) {
  let sum = 0;

  for (let i = 1; i <= 9; i++) {
    if (!numbers.includes(i)) sum += i;
  }

  return sum;
}
solution([1, 2, 3, 4, 6, 7, 8, 0]);
