function solution(data) {
  const str = data.trim();
  let i = 0;
  const result = {};
  while (i < (str.length - 1) / 2) {
    result[str[i]] = result[str[i]]
      ? result[str[i]] + (str.length - i) * (i + 1)
      : (str.length - i) * (i + 1);
    result[str[str.length - 1 - i]] = result[str[str.length - 1 - i]]
      ? result[str[str.length - 1 - i]] + (str.length - i) * (i + 1)
      : (str.length - i) * (i + 1);
    i++;
  }

  if ((str.length - 1) % 2 === 0) {
    result[str[i]] = result[str[i]]
      ? result[str[i]] + (str.length - i) * (i + 1)
      : (str.length - i) * (i + 1);
  }

  return Object.entries(result)
    .sort()
    .map((e) => e.join(': '))
    .join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
