function solution(nums) {
  const arr = [];
  nums.forEach(item1 => {
    nums.forEach(item2 => {
      nums.forEach(item3 => {
        if (item1 !== item2 && item1 !== item3 && item2 !== item3)
          arr.push(item1 + item2 + item3);
      });
    });
  });
  const set_arr = [...new Set(arr)];
  console.log(set_arr);
  // 소수판별만
}
solution([1, 2, 7, 6, 4]);
