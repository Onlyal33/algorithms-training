function solution(data) {
  const [n, i, j] = data.trim().split(' ').map(Number);

  return Math.min(Math.abs(j - i), n - Math.abs(j - i)) - 1;
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
