function solution(data) {
  const n = Number(data.trim());
  const dp = [1, 1, 0];

  for (let i = 2; i <= n; i++) {
    const dp0 = dp[0] + dp[1] + dp[2];
    dp[2] = dp[1];
    dp[1] = dp[0];
    dp[0] = dp0;
  }

  return dp[0] + dp[1] + dp[2];
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
