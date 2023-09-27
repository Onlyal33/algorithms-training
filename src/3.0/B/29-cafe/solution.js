function solution(data) {
  const [n, ...a] = data
    .trim()
    .split('\n')
    .flatMap((e) => e.split(' '))
    .map(Number);

  if (n === 0) {
    return '0\n0 0';
  }

  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 2 }, () => Infinity)
  );
  dp[0][0] = 0;
  dp[0][1] = 0;
  const prev = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => -1)
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n + 1; j++) {
      if (a[i - 1] > 100) {
        if (dp[i - 1][j + 1] < dp[i - 1][j - 1] + a[i - 1]) {
          dp[i][j] = dp[i - 1][j + 1];
          prev[i][j] = j + 1;
        } else {
          dp[i][j] = dp[i - 1][j - 1] + a[i - 1];
          prev[i][j] = j - 1;
        }
      } else {
        if (dp[i - 1][j + 1] < dp[i - 1][j] + a[i - 1]) {
          dp[i][j] = dp[i - 1][j + 1];
          prev[i][j] = j + 1;
        } else {
          dp[i][j] = dp[i - 1][j] + a[i - 1];
          prev[i][j] = j;
        }
      }
    }
  }

  const min = Math.min(...dp.at(-1));
  const left = dp.at(-1).findLastIndex((e) => e === min);
  let used = 0;
  let c = left;

  const cert = [];

  for (let k = n; k > 1; k--) {
    if (prev[k][c] > c) {
      used++;
      cert.push(k);
    }
    c = prev[k][c];
  }

  cert.reverse();

  return [min, [left - 1, used].join(' '), ...cert].join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
