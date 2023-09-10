function solution(data) {
  const [[n], diegos, [k], mins] = data.trim().split('\n').map((e) => e.split(' ').map(Number));

  diegos.sort((a, b) => a - b);
  const nums = [diegos[0]];
  for (let i = 1; i < n; i++) {
    if (diegos[i] !== diegos[i - 1]) {
      nums.push(diegos[i]);
    }
  }

  const ans = [];

  for (const min of mins) {
    let startId = 0;
    let endId = nums.length - 1;
    let res = -1;

    while (startId <= endId) {
      const mid = Math.floor((startId + endId + 1) / 2);
      if (nums[mid] < min) {
        startId = mid + 1;
        res = mid;
      } else {
        endId = mid - 1;
      }
    }

    ans.push(res + 1);
  }

  return ans.join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
