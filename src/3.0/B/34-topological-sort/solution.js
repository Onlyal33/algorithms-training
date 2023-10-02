function solution(data) {
  const [nm, ...rest] = data
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));
  const [n] = nm;

  const list = Array.from({ length: n + 1 }, () => []);

  for (const [f, t] of rest) {
    list[f].push(t);
  }

  const visited = Array.from({ length: n + 1 }, () => 0);
  const ans = [];

  for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) {
      const stack = [i];

      while (stack.length > 0) {
        const now = stack.at(-1);

        if (visited[now] === 0) {
          visited[now] = 1;
          for (const j of list[now]) {
            if (visited[j] === 0) {
              stack.push(j);
            } else if (visited[j] === 1) {
              return -1;
            }
          }
        } else if (visited[now] === 1) {
          visited[now] = 2;
          stack.pop();
          ans.push(now);
        } else {
          stack.pop();
        }
      }
    }
  }

  ans.reverse();

  return ans.join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
