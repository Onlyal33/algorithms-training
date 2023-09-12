const pairs = {
  ')': '(',
  ']': '[',
  '}': '{',
};

function solution(data) {
  const stack = [];
  for (sym of data) {
    if (sym === '(' || sym === '[' || sym === '{') {
      stack.push(sym);
    } else {
      const last = stack.pop();
      if (!sym || pairs[sym] !== last) {
        return 'no';
      }
    }
  }

  return stack.length === 0 ? 'yes' : 'no';
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
