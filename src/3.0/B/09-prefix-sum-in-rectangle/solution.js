function solution(data) {
  const [[n, m], ...matrix] = data
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));
  const reqs = matrix.splice(n);

  const sums = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      sums[i][j] =
        sums[i - 1][j] +
        sums[i][j - 1] -
        sums[i - 1][j - 1] +
        matrix[i - 1][j - 1];
    }
  }

  return reqs
    .map(
      ([x1, y1, x2, y2]) =>
        sums[x2][y2] -
        sums[x1 - 1][y2] -
        sums[x2][y1 - 1] +
        sums[x1 - 1][y1 - 1]
    )
    .join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
