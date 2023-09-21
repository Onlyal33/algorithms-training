function solution(data) {
	const [, ...times] = data.trim().split('\n').map(e => e.trim().split(' ').map(Number));

    times.unshift([Infinity, Infinity, Infinity], [Infinity, Infinity, Infinity], [Infinity, Infinity, Infinity]);

    const dp = Array.from({ length: times.length }, () => 0);

    for (let i = 3; i < dp.length; i++) {
        dp[i] = Math.min(times[i][0] + dp[i - 1], times[i - 1][1]  + dp[i - 2], times[i - 2][2] + dp[i - 3]);
    }

    return dp.at(-1);
}

const fs = require('fs');
let fileContent = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const result = solution(fileContent);

fs.writeFileSync(`${__dirname}/output.txt`, result.toString());
