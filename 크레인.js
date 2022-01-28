function solution(board, moves) {
  var answer = 0;
  let basket = [];

  const newMoves = moves.map(move => {
    return move - 1;
  });

  for (let i = 0; i < newMoves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // console.log(board[j][newMoves[i]]);
      if (board[j][newMoves[i]] !== 0) {
        basket.push(board[j][newMoves[i]]);
        board[j][newMoves[i]] = 0;
        if (basket[basket.length - 1] === basket[basket.length - 2]) {
          basket.pop();
          basket.pop();
          answer += 2;
        }
        break;
      }
    }
  }

  console.log(answer);
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
