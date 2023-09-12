function solution(data) {
  const [, str] = data.split('\n');
  const cars1 = str.split(' ').map(Number);
  const stack = [];
  const cars2 = [];
  let curr = 1;

  while (cars1.length > 0 || stack.length > 0) {
    const i = cars1.findIndex((el) => el === curr);
    if (i < 0) {
      return 'NO';
    }

    let j = 0;
    while (j <= i) {
      stack.push(cars1.shift());
      j++;
    }

    while (stack.length > 0) {
      const last = stack[stack.length - 1];
      if (curr !== last) {
        break;
      }

      cars2.push(stack.pop());
      curr++;
    }
  }

  return 'YES';
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
