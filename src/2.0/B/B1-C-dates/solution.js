function solution(data) {
  const [x, y] = data.trim().split(' ').map(Number);

  const isCorrect = (m, d) => {
    if (m > 12) return 0;
    if (m31.includes(m) && d > 31) return 0;
    if (m30.includes(m) && d > 30) return 0;
    if (m === 2 && d > 29) return 0;
    return 1;
  };

  return x === y && x < 13 ? 1 : 2 - (isCorrect(x, y) + isCorrect(y, x));
}

const m31 = [1, 3, 5, 7, 8, 10, 12];
const m30 = [4, 6, 9, 11];

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
