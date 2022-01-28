function solution(board, moves) {
  var answer = 0;
  let basket = [];

  const newMoves = moves.map(move => {
    return move - 1;
  });

  for (const move of newMoves) {
    for (const board_item of board) {
      if (board_item[move] !== 0) {
        basket.push(board_item[move]);
        board_item[move] = 0;
        if (basket[basket.length - 1] === basket[basket.length - 2]) {
          basket.splice(basket.length - 2, 2);
          answer += 2;
        }
        break;
      }
    }
  }

  return answer;
}
solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
