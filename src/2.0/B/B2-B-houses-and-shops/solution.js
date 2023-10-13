function solution(data) {
  const arr = data.trim().split(' ').map(Number);

  const dist = {};

  let lastShop = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      dist[i] = i - lastShop;
    } else if (arr[i] === 2) {
      lastShop = i;
    }
  }

  lastShop = Infinity;

  for (let j = arr.length - 1; j >= 0; j--) {
    if (arr[j] === 1) {
      dist[j] = Math.min(lastShop - j, dist[j]);
    } else if (arr[j] === 2) {
      lastShop = j;
    }
  }

  return Math.max(...Object.values(dist));
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
