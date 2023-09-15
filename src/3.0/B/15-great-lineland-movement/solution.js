function solution(data) {
  const [, str] = data.split('\n');
  const values = str.split(' ').map(Number);
  const stack = [];
  const result = Array(values.length);

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    while (stack.at(-1)?.[1] > value) {
      const [id] = stack.pop();
      result[id] = i;
    }
    stack.push([i, value]);
  }

  for (let j = stack.length - 1; j >= 0; j--) {
    const [id] = stack.pop();
    result[id] = -1;
  }

  return result.join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
