function solution(data) {
  const str = data.trim();

  let i = 0;
  let j = str.length - 1;
  let ans = 0;

  while (i < j) {
    if (str[i] !== str[j]) {
      ans++;
    }

    i++;
    j--;
  }

  return ans;
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
