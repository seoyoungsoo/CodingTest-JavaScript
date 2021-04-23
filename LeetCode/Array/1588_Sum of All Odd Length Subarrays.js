// 1588번 Sum of All Odd Length Subarrays

const sumOddLengthSubarrays = (arr) => {
  let len = 1, sum = 0;

  while (len <= arr.length) {
    for (let i = 0; i < arr.length - len + 1; i++) {
      for (let j = i; j < len + i; j++) {
        sum += arr[j];
      }
    }
    len += 2;
  }
  return sum;
}

const arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));