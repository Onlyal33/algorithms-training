function solution(data) {
  const [n, m] = data.trim().split(' ').map(Number);

  const dp = Array.from({ length: n + 2 }, () =>
    Array.from({ length: m + 2 }, () => 0)
  );
  dp[0][1] = 1;

  for (let i = 2; i <= n + 1; i++) {
    for (let j = 2; j <= m + 1; j++) {
      dp[i][j] = dp[i - 2][j - 1] + dp[i - 1][j - 2];
    }
  }

  return dp[n + 1][m + 1];
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
