// 최대공약수와 최소공배수

const gcd = (a, b) => {
  while (b > 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

const lcm = (a, b) => {
  return a * b / gcd(a ,b);
}

const solution = (n, m) => {
  const a = Math.max(n, m);
  const b = Math.min(n, m);

  return [gcd(a, b), lcm(a, b)];
}

const n = 3, m = 12;
console.log(solution(n, m));