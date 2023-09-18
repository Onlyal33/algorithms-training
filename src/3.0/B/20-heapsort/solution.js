const heapify = (arr, head, last) => {
  let pos = head;
  while (2 * pos + 1 <= last) {
    let max = 2 * pos + 1;
    if (2 * pos + 2 <= last && arr[2 * pos + 2] > arr[2 * pos + 1]) {
      max = 2 * pos + 2;
    }

    if (arr[pos] >= arr[max]) {
      break;
    }

    [arr[pos], arr[max]] = [arr[max], arr[pos]];
    pos = max;
  }
};

function solution(data) {
  const [, numbers] = data.split('\n').map((el) => el.split(' ').map(Number));

  for (let i = Math.floor((numbers.length - 1) / 2); i >= 0; i--) {
    heapify(numbers, i, numbers.length - 1);
  }

  for (let j = numbers.length - 1; j > 0; j--) {
    [numbers[0], numbers[j]] = [numbers[j], numbers[0]];
    heapify(numbers, 0, j - 1);
  }

  return numbers.join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
