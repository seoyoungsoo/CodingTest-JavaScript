// 구명보트

const solution = (people, limit) => {
  people.sort((a, b) => a - b);
  let result = 0;

  while (people.length) {
    if (people.length < 2) {
      people.shift();
      result++;
    } else {
      if (people[0] + people[people.length -1] <= limit) {
        people.pop();
        people.shift();
      } else {
        people.pop();
      }
      result++;
    }
  }
  return result;
}

const people = [70, 50, 80, 50], limit = 100;
console.log(solution(people, limit));