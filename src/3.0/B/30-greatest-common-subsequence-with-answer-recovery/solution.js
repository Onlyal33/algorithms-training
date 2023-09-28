function solution(data) {
  const [narr, a, marr, b] = data
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));
  const [n] = narr;
  const [m] = marr;

  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  const cert = [];
  let k = n;
  let l = m;

  while (dp[k][l] > 0) {
    if (a[k - 1] === b[l - 1]) {
      cert.push(a[k - 1]);
      k--;
      l--;
    } else if (dp[k - 1][l] > dp[k][l - 1]) {
      k--;
    } else {
      l--;
    }
  }

  cert.reverse();

  return cert.join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
