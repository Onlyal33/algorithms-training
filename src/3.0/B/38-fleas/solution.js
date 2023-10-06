function solution(data) {
  const [nm, ...rest] = data.trim().split('\n');
  const [n, m, s, t] = nm.split(' ').map(Number);

  const set = new Set(rest);
  let ans = 0;

  const dx = [2, 2, 1, 1, -1, -1, -2, -2];
  const dy = [1, -1, 2, -2, 2, -2, 1, -1];

  const visited = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => -1)
  );

  const queue = [[s, t]];
  visited[s][t] = 0;

  while (queue.length > 0 && set.size > 0) {
    const [nowx, nowy] = queue.shift();
    if (set.has(`${nowx} ${nowy}`)) {
      ans += visited[nowx][nowy];
      set.delete(`${nowx} ${nowy}`);
    }

    for (let j = 0; j < 8; j++) {
      if (
        nowx + dx[j] <= n &&
        nowy + dy[j] <= m &&
        nowx + dx[j] > 0 &&
        nowy + dy[j] > 0 &&
        visited[nowx + dx[j]][nowy + dy[j]] < 0
      ) {
        visited[nowx + dx[j]][nowy + dy[j]] = visited[nowx][nowy] + 1;
        queue.push([nowx + dx[j], nowy + dy[j]]);
      }
    }
  }

  return set.size === 0 ? ans : -1;
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
