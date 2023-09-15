function solution(data) {
  const [, ...instructions] = data
    .split('\n')
    .map((el) => el.split(' ').map(Number));
  const heap = [];
  const log = [];
  for (const arr of instructions) {
    const [inst, num] = arr;
    switch (inst) {
      case 0: {
        heap.push(num);
        let currentId = heap.length - 1;

        while (true) {
          const parentId = Math.floor((currentId - 1) / 2);
          if (parentId < 0) {
            break;
          }

          const parent = heap[parentId];
          if (num <= parent) {
            break;
          }

          heap[parentId] = num;
          heap[currentId] = parent;
          currentId = parentId;
        }
        break;
      }
      case 1: {
        log.push(heap[0]);
        heap[0] = heap.at(-1);

        let currentId = 0;

        while (true) {
          const leftChildId = currentId * 2 + 1;
          const rightChildId = currentId * 2 + 2;

          if (leftChildId >= heap.length) {
            break;
          }

          let max;
          let maxId;

          if (heap[leftChildId] <= heap[rightChildId]) {
            max = heap[rightChildId];
            maxId = rightChildId;
          } else {
            max = heap[leftChildId];
            maxId = leftChildId;
          }

          if (heap[currentId] >= max) {
            break;
          }

          heap[maxId] = heap[currentId];
          heap[currentId] = max;
          currentId = maxId;
        }

        heap.pop();
        break;
      }
    }
  }

  return log.join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
