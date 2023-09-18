function solution(data) {
  const n = Number(data.trim());

  const dp = Array.from({ length: n }, () => 0);
  const prev = Array.from({ length: n }, () => 0);

  for (let i = 2; i <= n; i++) {
    const x2 = i % 2 === 0 ? dp[i / 2] : Infinity;
    const x3 = i % 3 === 0 ? dp[i / 3] : Infinity;

    if (dp[i - 1] <= x2 && dp[i - 1] <= x3) {
      dp[i] = dp[i - 1] + 1;
      prev[i] = i - 1;
    } else if (x2 < dp[i - 1] && x2 <= x3) {
      dp[i] = x2 + 1;
      prev[i] = i / 2;
    } else {
      dp[i] = x3 + 1;
      prev[i] = i / 3;
    }
  }

  const sert = [];
  let j = n;

  while (j > 0) {
    sert.unshift(j);
    j = prev[j];
  }

  return [dp.at(-1), sert.join(' ')].join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
