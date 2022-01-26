// 숫자 문자열과 영단어

function solution(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let answer = s;

  numbers.forEach((_, i) => {
    const arr = answer.split(numbers[i]);
    answer = arr.join(i);
  })

  return Number(answer);
}

const s = "one4seveneight";
console.log(solution(s));