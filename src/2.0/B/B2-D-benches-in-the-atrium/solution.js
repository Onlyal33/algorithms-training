function solution(data) {
  const [[l], legs] = data
    .trim()
    .split('\n')
    .map((e) => e.trim().split(' ').map(Number));

  const mid = (l - 1) / 2;
  const i = legs.findIndex((e) => e >= mid);
  return legs[i] === mid ? legs[i] : [legs[i - 1], legs[i]].join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
