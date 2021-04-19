// 746번 Min Cost Climbing Stairs

const minCostClimbingStairs = (cost) => {
  let min1 = cost[0], min2 = cost[1];

  for (let i=2; i<cost.length; i++) {
    let tmp = Math.min(min1, min2) + cost[i];
    min1 = min2;
    min2 = tmp;
  }
  return Math.min(min1, min2);
}

const cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));