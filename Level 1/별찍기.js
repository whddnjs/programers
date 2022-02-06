function solution(n, m) {
  let star = '';
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}
solution(5, 5);

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(a);
  console.log(b);
});
