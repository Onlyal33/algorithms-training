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

  const colors = Array.from({ length: n + 1 }, () => 0);

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] === 0) {
      colors[i] = 1;
      const queue = [i];
      while (queue.length > 0) {
        const now = queue.shift();
        for (neigh of list[now]) {
          if (colors[neigh] === 0) {
            colors[neigh] = 3 - colors[now];
            queue.push(neigh);
          } else if (colors[neigh] === colors[now]) {
            return 'NO';
          }
        }
      }
    }
  }

  return 'YES';
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
