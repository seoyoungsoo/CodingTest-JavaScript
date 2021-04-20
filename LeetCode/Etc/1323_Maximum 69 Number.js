// 1323번 Maximum 69 Number

const maximum69Number = (num) => {
  num = String(num).split('');
  for (let i = 0; i < num.length; i++) {
    if (num[i] === '6') {
      num[i] = '9';
      break;
    }
  }
  return num.join('');
}

const num = 9669;
console.log(maximum69Number(num));