// 단어 변환
// 코드참조: https://velog.io/@ypyp66/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A8%EC%96%B4-%EB%B3%80%ED%99%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

const solution = (begin, target, words) => {
  const bfs = () => {
    q.push([begin, res]);

    while (q) {
      let [value, cnt] = q.shift();

      if (value === target) return cnt;

      words.forEach(word => {
        let tmp = 0;

        if (visited.includes(word)) return;

        for (let i = 0; i < word.length; i++) {
          if (word[i] !== value[i]) tmp++;
        }

        if (tmp === 1) {
          q.push([word, ++cnt]);
          visited.push(word);
        }
      });
    };
  };

  let res = 0;
  let visited = [], q = [];

  if (!words.includes(target)) return 0;

  return bfs();
}

const begin = 'hit';
const target = 'cog';
const words = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(solution(begin, target, words));