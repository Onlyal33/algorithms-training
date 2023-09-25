function solution(data) {
  const [params, ...tab] = data
    .trim()
    .split('\n')
    .map((e) => e.trim().split(' ').map(Number));

  const [n, m] = params;

  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );
  const prev = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => -1)
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (dp[i - 1][j] >= dp[i][j - 1]) {
        dp[i][j] = dp[i - 1][j] + tab[i - 1][j - 1];
        prev[i][j] = 'D';
      } else {
        dp[i][j] = dp[i][j - 1] + tab[i - 1][j - 1];
        prev[i][j] = 'R';
      }
    }
  }

  const path = [];
  let k = n;
  let l = m;
  while (k !== 1 || l !== 1) {
    path.push(prev[k][l]);
    if (prev[k][l] === 'D') {
      k--;
    } else {
      l--;
    }
  }
  path.reverse();

  return [dp[n][m], path.join(' ')].join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
