function solution(data) {
  const [, a] = data
    .trim()
    .split('\n')
    .map((e) => e.trim().split(' ').map(Number));

  a.sort((a, b) => a - b);

  if (a.length === 2) {
    return a[1] - a[0];
  }

  const dp = Array.from({ length: a.length }, () => 0);

  dp[1] = a[1] - a[0];
  dp[2] = a[2] - a[0];

  for (let i = 3; i < a.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + a[i] - a[i - 1];
  }

  return dp.at(-1);
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
