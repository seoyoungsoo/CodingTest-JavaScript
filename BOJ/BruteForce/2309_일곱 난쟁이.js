// 2309번 일곱 난쟁이

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `20
7
23
19
10
15
25
8
13
`
).split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
 
let t = 9;
const dwarf = [];
while (t--) {
    dwarf.push(+input());
}

dwarf.sort((a, b) => a - b);
let tall = dwarf.reduce((acc, cur) => acc += cur, 0) - 100;
for (let i = 0; i < dwarf.length; i++) {
  for (let j = i + 1; j < dwarf.length; j++) {
    if (dwarf[i] + dwarf[j] === tall) {
      dwarf.splice(j, 1);
      dwarf.splice(i, 1);
      break;
    }
  }
}

dwarf.forEach((d) => console.log(d));