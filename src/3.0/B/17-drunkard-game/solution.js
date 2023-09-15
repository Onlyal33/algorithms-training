function solution(data) {
  const [first, second] = data
    .split('\n')
    .map((el) => el.trim().split(' ').map(Number));
  let counter = 0;
  while (first.length > 0 && second.length > 0 && counter < 1000000) {
    const card1 = first.shift();
    const card2 = second.shift();
    if ((card1 > card2 && card1 - card2 < 9) || card1 - card2 === -9) {
      first.push(card1, card2);
    } else {
      second.push(card1, card2);
    }
    counter++;
  }

  if (first.length === 0) {
    return 'second ' + counter;
  } else if (second.length === 0) {
    return 'first ' + counter;
  }

  return 'botva ' + counter;
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
