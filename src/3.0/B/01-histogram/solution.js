function solution(data) {
  const dict = {};
  let max = 0;

  for (const sym of data) {
    if (sym !== '\n' && sym !== ' ') {
      dict[sym] = 1 + dict[sym] || 1;
      if (dict[sym] > max) {
        max = dict[sym];
      }
    }
  }

  const a = Object.keys(dict);
  a.sort();

  const ans = [a];

  for (let i = 1; i < max + 1; i++) {
    ans.unshift([]);
    for (let j = 0; j < a.length; j++) {
      ans[0].push(i <= dict[a[j]] ? '#' : ' ');
    }
  }

  return ans.map((s) => s.join('')).join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
