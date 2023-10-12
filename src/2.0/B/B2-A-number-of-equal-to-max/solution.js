function solution(data) {
  const arr = data.trim().split('\n').map(Number);

  let max = 0;
  let n = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      n = 1;
      max = arr[i];
    } else if (arr[i] === max) {
      n++;
    } else if (arr[i] === 0) {
      break;
    }
  }

  return n;
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
