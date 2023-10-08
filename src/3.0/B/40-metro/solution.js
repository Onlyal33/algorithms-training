function solution(data) {
  const [, [m], ...rest] = data
    .trim()
    .split('\n')
    .map((e) => e.trim().split(' ').map(Number));

  const [a, b] = rest.pop();

  const sets = rest.map(([, ...els]) => new Set(els));

  const visited = Array.from({ length: m }, () => -1);

  const queue = [];

  const destinations = new Set();

  const list = Array.from({ length: m }, () => []);

  for (let i = 0; i < m; i++) {
    for (const el of sets[i]) {
      for (let j = 0; j < m; j++) {
        if (i !== j && sets[j].has(el)) {
          list[i].push(j);
        }
      }
    }
    if (sets[i].has(a)) {
      queue.push(i);
      visited[i] = 0;
    }
    if (sets[i].has(b)) {
      destinations.add(i);
    }
  }

  while (queue.length > 0) {
    const now = queue.shift();
    if (destinations.has(now)) {
      return visited[now];
    }

    for (let j = 0; j < list[now].length; j++) {
      if (visited[list[now][j]] === -1) {
        queue.push(list[now][j]);
        visited[list[now][j]] = visited[now] + 1;
      }
    }
  }

  return -1;
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
