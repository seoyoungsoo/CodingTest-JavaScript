// 큰 수 만들기
// 코드참조: https://taesung1993.tistory.com/46
// slice()와 splice()의 차이점: https://m.blog.naver.com/wideeyed/221876916945ㄴ

const solution = (number, k) => {
  const result = [];
  
  for (let i = 0; i < number.length; i++) {
    const tmp = number[i];

    while (k > 0 && result[result.length - 1] < tmp) {
      result.pop();
      k--;
    }
    result.push(tmp);
  }
  result.splice(result.length-k, k);
  return result.join('');
}

const number = '4177252841', k = 4;
console.log(solution(number, k));