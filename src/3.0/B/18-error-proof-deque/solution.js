function solution(data) {
  const instructions = data.split('\n').map((el) => el.split(' '));
  let queue = [];
  const log = [];
  for (const arr of instructions) {
    const [inst, num] = arr;
    switch (inst) {
      case 'push_front': {
        queue.unshift(Number(num));
        log.push('ok');
        break;
      }
      case 'push_back': {
        queue.push(Number(num));
        log.push('ok');
        break;
      }
      case 'pop_front': {
        if (queue.length === 0) {
          log.push('error');
        } else {
          const el = queue.shift();
          log.push(el);
        }
        break;
      }
      case 'pop_back': {
        if (queue.length === 0) {
          log.push('error');
        } else {
          const el = queue.pop();
          log.push(el);
        }
        break;
      }
      case 'front': {
        if (queue.length === 0) {
          log.push('error');
        } else {
          log.push(queue[0]);
        }
        break;
      }
      case 'back': {
        if (queue.length === 0) {
          log.push('error');
        } else {
          log.push(queue.at(-1));
        }
        break;
      }
      case 'size': {
        log.push(queue.length);
        break;
      }
      case 'clear': {
        queue = [];
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
