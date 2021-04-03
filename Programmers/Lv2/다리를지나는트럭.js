// 다리를 지나는 트럭
// 코드참조: http://yoonbumtae.com/?p=3627

const solution = (bridge_length, weight, truck_weights) => {
  if (truck_weights.length == 1) return bridge_length + 1;

  let sec = 0;
  let bridge = new Array(bridge_length).fill(0);

  while (bridge.length) {
    sec++;
    bridge.shift();
    if (truck_weights.length) {
      const sum_b = bridge.reduce((acc, val) => acc + val, 0);
      if (sum_b + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }
  return sec;
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];
console.log(solution(bridge_length, weight, truck_weights));