function solution(data) {
  const [nm, ...rest] = data
    .trim()
    .split('\n\n')
    .map((e) => e.split('\n').map((e) => e.split('')));
  const n = Number(nm[0].join(''));

  let s;

  for (let z = 0; z < n; z++) {
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        if (rest[z][x][y] === 'S') {
          s = { x, y, z };
          break;
        }
      }
    }
  }

  if (!s) {
    return '-1';
  }

  const dz = [0, 0, 0, 0, 1, -1];
  const dx = [1, -1, 0, 0, 0, 0];
  const dy = [0, 0, 1, -1, 0, 0];

  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array.from({ length: n }, () => -1))
  );

  const queue = [[s.z, s.x, s.y]];
  visited[s.z][s.x][s.y] = 0;

  while (queue.length > 0) {
    const [nowz, nowx, nowy] = queue.shift();
    if (nowz === 0) {
      return visited[nowz][nowx][nowy];
    }

    for (let j = 0; j < 6; j++) {
      if (
        nowx + dx[j] < n &&
        nowy + dy[j] < n &&
        nowz + dz[j] < n &&
        nowx + dx[j] >= 0 &&
        nowy + dy[j] >= 0 &&
        nowz + dz[j] >= 0 &&
        rest[nowz + dz[j]][nowx + dx[j]][nowy + dy[j]] === '.' &&
        visited[nowz + dz[j]][nowx + dx[j]][nowy + dy[j]] < 0
      ) {
        visited[nowz + dz[j]][nowx + dx[j]][nowy + dy[j]] =
          visited[nowz][nowx][nowy] + 1;
        queue.push([nowz + dz[j], nowx + dx[j], nowy + dy[j]]);
      }
    }
  }
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
