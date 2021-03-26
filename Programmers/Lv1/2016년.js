const solution = (a, b) => {
  const date = new Date(`2016,${a},${b}`);

  return date.toString().slice(0,3).toUpperCase();
}

const a = 5;
const b = 24;
console.log(solution(a, b));