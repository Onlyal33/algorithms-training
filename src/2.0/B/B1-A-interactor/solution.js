function solution(data) {
  const [r, i, c] = data.trim().split('\n').map(Number);

  if (i === 0) {
    return r !== 0 ? 3 : c;
  } else if (i === 1) {
    return c;
  } else if (i === 4) {
    return r !== 0 ? 3 : 4;
  } else if (i === 6) {
    return 0;
  } else if (i === 7) {
    return 1;
  } else {
    return i;
  }
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
