function solution(data) {
  const [nm, ...matrix] = data
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));
  const [n] = nm;

  const [first, last] = matrix.pop();

  const visited = Array.from({ length: n }, () => -1);
  const prev = Array.from({ length: n }, () => -1);

  const queue = [first - 1];
  visited[first - 1] = 0;

  while (queue.length > 0) {
    const now = queue.shift();
    for (let j = 0; j < n; j++) {
      if (matrix[now][j] === 1 && visited[j] === -1) {
        visited[j] = visited[now] + 1;
        prev[j] = now;
        queue.push(j);
      }
    }
  }

  if (visited[last - 1] <= 0) {
    return visited[last - 1];
  }

  const ans = [last];

  while (prev[ans.at(-1) - 1] >= 0) {
    ans.push(prev[ans.at(-1) - 1] + 1);
  }

  ans.reverse();

  return [visited[last - 1], ans.join(' ')].join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
