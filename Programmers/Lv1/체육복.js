// 코드참조: https://jsikim1.tistory.com/52

const solution = (n, lost, reserve) => {
  let rLost = lost.filter((a) => !reserve.includes(a));
  let rReserve = reserve.filter((a) => !lost.includes(a));

  const len = rLost.filter((a) => {
    const student = rReserve.find((b) => Math.abs(a - b) === 1);

    if (!student) return true;

    rReserve = rReserve.filter((b) => student !== b);
  }).length;

  return n - len;
};

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];
console.log(solution(n, lost, reserve));
