function solution(data) {
  const [[n], arr] = data
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));

  const id = Math.floor((n - 1) / 2);

  return arr[id];
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
