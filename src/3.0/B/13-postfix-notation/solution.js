const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(data) {
  const symbols = data.trim().split(' ');
  const stack = [];

  for (const s of symbols) {
    if (s === '+' || s === '-' || s === '*') {
      const b = Number(stack.pop());
      const a = Number(stack.pop());
      stack.push(ops[s](a, b));
    } else {
      stack.push(s);
    }
  }

  return stack[0];
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
