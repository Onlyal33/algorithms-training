function solution(data) {
  const instructions = data.split('\n').map((el) => el.split(' '));
  let stack = [];
  const log = [];

  for (const arr of instructions) {
    const [inst, num] = arr;
    switch (inst) {
      case 'push': {
        stack.push(Number(num));
        log.push('ok');
        break;
      }
      case 'pop': {
        if (stack.length === 0) {
          log.push('error');
        } else {
          const el = stack.pop();
          log.push(el);
        }
        break;
      }
      case 'back': {
        if (stack.length === 0) {
          log.push('error');
        } else {
          log.push(stack[stack.length - 1]);
        }
        break;
      }
      case 'size': {
        log.push(stack.length);
        break;
      }
      case 'clear': {
        stack = [];
        log.push('ok');
        break;
      }
      case 'exit': {
        log.push('bye');
        return log.join('\n');
      }
    }
  }
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
