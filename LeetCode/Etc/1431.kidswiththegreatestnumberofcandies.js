// 1431번 Kids With the Greatest Number of Candies

const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  return candies.map(candy => candy + extraCandies >= max ? true : false);
}

const candies = [4, 2, 1, 1, 2], extraCandies = 1;
console.log(kidsWithCandies(candies, extraCandies));