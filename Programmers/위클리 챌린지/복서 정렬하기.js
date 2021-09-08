// 복서 정렬하기

const solution = (weights, head2head) => {
  const arr = [];
  for (let i = 0; i < head2head.length; i++) {
    let total = 0;
    let weight = 0;
    let win = 0;

    for (let result in head2head[i]) {
      if (head2head[i][result] !== 'N') total++;
      if (head2head[i][result] === 'W') {
        win++;
        if (weights[i] < weights[result]) {
          weight++;
        }
      }
    }
    arr.push([i+1, win/total, weight, weights[i]]);
  }

  arr.sort((a, b) => b[1] - a[1] || b[2] - a[2] || b[3] - a[3] || a[0] - b[0]);
  
  let res = [];
  
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i][0]);
  }

  return res;
}

const weights = [50,82,75,120];
const head2head = ["NLWL","WNLL","LWNW","WWLN"];
console.log(solution(weights, head2head));