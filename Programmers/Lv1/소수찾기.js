// 소수 찾기

const solution = (n) => {
  const s = new Set();

  // 2를 제외한 짝수는 소수일 수 없다
  s.add(2);
  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }

  for (let j = 3; j ** 2 < n; j++) {
    if (s.has(j)) {
      for (let k = j ** 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
};

n = 10;
console.log(solution(n));
