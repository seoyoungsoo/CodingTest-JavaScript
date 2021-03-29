// 시저 암호

// charCodeAt: 문자열 중 하나를 선택하여 아스키코드 번호로 변환해주는 함수
// fromCharCode: 아스키코드 번호를 받아 문자열을 구성해주는 함수

const solution = (s, n) => {
  return s.split('').map((v) => {
      if (v === ' ') return v;

      return v.toUpperCase().charCodeAt() + n > 90 ?
        String.fromCharCode(v.charCodeAt() + n - 26) :
        String.fromCharCode(v.charCodeAt() + n);
    })
    .join('');
};

const s = 'a B z';
const n = 4;
console.log(solution(s, n));