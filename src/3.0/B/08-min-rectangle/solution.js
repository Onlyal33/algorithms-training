function solution(data) {
  const [,...coords] = data.trim().split('\n').map((e) => e.split(' ').map(Number));

  const ans = [Infinity, Infinity, -Infinity, -Infinity]

  for (const [x, y] of coords) {
    ans[0] = Math.min(ans[0], x);
    ans[1] = Math.min(ans[1], y);
    ans[2] = Math.max(ans[2], x);
    ans[3] = Math.max(ans[3], y);
  }

  return ans.join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
