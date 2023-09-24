function solution(data) {
  const [params, ...tab] = data
    .trim()
    .split('\n')
    .map((e) => e.trim().split(' ').map(Number));

  const [n, m] = params;

  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => Infinity)
  );
  dp[0][1] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + tab[i - 1][j - 1];
    }
  }

  return dp[n][m];
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
