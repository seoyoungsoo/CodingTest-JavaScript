// 핸드폰 번호 가리기

const solution = (phone_number) => {
  return phone_number.split('').map((num, index) => {
    if (index < phone_number.length - 4) return '*';
    return num;
  }).join('');
}

// repeat을 이용한 방법
// const solution = (phone_number) => {
//   return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
// }

const phone_number = '01033334444';
console.log(solution(phone_number));