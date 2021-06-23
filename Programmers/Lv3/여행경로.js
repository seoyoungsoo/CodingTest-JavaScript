// 여행경로
// 코드참조: https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C-JS

const solution = (tickets) => {
  let ans = [];
  const res = [], visited = [];

  tickets.sort();

  const dfs = (str, cnt) => {
    res.push(str);

    if (tickets.length === cnt) {
      ans = res;
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = true;

        if (dfs(tickets[i][1], cnt+1)) return true;

        visited[i] = false;
      }
    }
    res.pop();

    return false;
  }
  dfs("ICN", 0);

  return ans;
}

const tickets = [['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']];
console.log(solution(tickets));