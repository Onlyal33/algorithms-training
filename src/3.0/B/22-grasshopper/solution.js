function solution(data) {
  const [n, k] = data.trim().split(' ').map(Number);

  const dp = Array.from({ length: n + k }, () => 0);
  dp[k] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[k + i - 1] = dp[k + i - 1] + dp[k + i - 1 - j];
    }
  }

  return dp.at(-1);
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
