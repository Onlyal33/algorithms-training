function solution(data) {
  const [nm, ...rest] = data
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));
  const [n] = nm;

  const list = Array.from({ length: n + 1 }, () => []);
  for (const v of rest) {
    const [a, b] = v;
    list[a].push(b);
    list[b].push(a);
  }

  const visited = Array.from({ length: n + 1 }, () => false);

  const visitedLists = [];
  let count = 0;

  for (let i = 1; i < visited.length; i++) {
    if (!visited[i]) {
      count++;
      visitedLists.push([]);
      const stack = [i];
      while (stack.length > 0) {
        const now = stack.pop();
        visited[now] = count;
        visitedLists[count - 1].push(now);
        for (neig of list[now]) {
          if (!visited[neig] && !stack.includes(neig)) {
            stack.push(neig);
          }
        }
      }
    }
  }

  return [count, ...visitedLists.flatMap((e) => [e.length, e.join(' ')])].join(
    '\n'
  );
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
