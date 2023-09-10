function solution(data) {
  const times = data
    .trim()
    .split('\n')
    .map((e) => {
      const time = e.split(':');
      return Number(time[0]) * 3600 + Number(time[1]) * 60 + Number(time[2]);
    });

  const delay = Math.round(
    ((times[2] - times[0] + 60 * 60 * 24) % (60 * 60 * 24)) / 2
  );

  const ans = (times[1] + delay) % (60 * 60 * 24);

  const minsec = ans % (60 * 60);
  const hrs = (ans - minsec) / (60 * 60);
  const sec = minsec % 60;
  const min = (minsec - sec) / 60;

  return [pad(hrs), pad(min), pad(sec)].join(':');
}

const pad = (d) => (d.toString().length === 1 ? `0${d}` : d);

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
