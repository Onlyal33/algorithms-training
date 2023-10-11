function solution(data) {
  const [[d], [x, y]] = data
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));

  if (x + y <= d && x >= 0 && y >= 0) return 0;

  if (x * 2 <= d && y * 2 <= d) return 1;

  if (x >= y) return 2;

  return 3;
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
