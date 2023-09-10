function solution(data) {
  const [k, str] = data.trim().split('\n');

  let ans = 0;

  for (let i = 'a'.charCodeAt(0); i < 26 + 'a'.charCodeAt(0); i++) {
    const char = String.fromCharCode(i);
    let l = 0;
    let r = 0;
    let t = Number(k);
    while (l < str.length) {
      if (t > 0 && r < str.length) {
        if (str[r] !== char) {
          t--;
        }
        r++;
      } else if (t === 0 && str[r] === char && r < str.length) {
        r++;
      } else {
        ans = Math.max(ans, r - l);
        if (str[l] !== char) {
          t++;
        }
        l++;
      }
    }
  }

  return ans;
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
