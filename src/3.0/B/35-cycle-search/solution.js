function solution(data) {
  const [nm, ...matrix] = data
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));
  const [n] = nm;

  const visited = Array.from({ length: n }, () => 0);

  const dfs = (now, prev) => {
    visited[now] = 1;
    for (let j = 0; j < n; j++) {
      if (matrix[now][j] === 1) {
        if (visited[j] === 0) {
          const result = dfs(j, now);
          if (result) {
            if (result.finished) {
              return result;
            } else if (result.data[0] === now) {
              result.finished = true;
              return result;
            } else {
              result.data.push(now);
              return result;
            }
          }
        } else if (visited[j] === 1 && j !== prev) {
          return { finished: false, data: [j, now] };
        }
      }
    }
    visited[now] = 2;
    return null;
  };

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      const res = dfs(i, -1);
      if (res) {
        return [
          'YES',
          res.data.length,
          res.data.map((e) => e + 1).join(' '),
        ].join('\n');
      }
    }
  }

  return 'NO';
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
