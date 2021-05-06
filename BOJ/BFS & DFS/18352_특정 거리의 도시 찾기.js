// 18352번 특정 거리의 도시 찾기

// 나의 풀이
// 시간 초과 문제를 해결하지 못해 파이썬으로 문제를 해결했다.
// const fs = require('fs');
// const stdin = (process.platform === 'linux' ?
// fs.readFileSync('/dev/stdin').toString() :
// `4 4 1 1
// 1 2
// 1 3
// 2 3
// 2 4
// `
// ).split('\n');

// const input = (() => {
//   let line = 0;
//   return () => stdin[line++];
// })();

// const BFS = (x) => {
//   const q = [x];
//   visited[x] = 0;

//   while (q.length) {
//     const n = q.shift();
//     for (let item of graph[n]) {
//       if (visited[item] === -1) {
//         visited[item] = visited[n] + 1;
//         q.push(item);
//       }
//     }
//   }
// }

// const [N, M, K, X] = input().split(' ').map(e => parseInt(e));

// let graph = Array.from(Array(N + 1), () => []);
// let visited = Array(N + 1).fill(-1);

// for (let i = 0; i < M; i++) {
//   const [n1, n2] = input().split(' ').map(e => parseInt(e));

//   graph[n1] = [...graph[n1], n2];
// }

// BFS(X);
// let check = false;
// for (let i = 1; i < N + 1; i++) {
//   if (visited[i] === K) {
//     console.log(i);
//     check = true;
//   }
// }
// if (!check) console.log(-1);

// 시간 초과를 해결한 js 코드 풀이
const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 5 3 1
1 2
1 3
2 3
2 4
4 1`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const bfs = ((start) => {
    let queue = []
    queue.push({ currNode: start, currCnt: 0 })
    d[start] = 0
    while (queue.length) {
        queue.sort((a, b) => {
            return a.currCnt - b.currCnt
        })

        let { currNode, currCnt } = queue.shift()

        if (currCnt > K) {
            continue
        }

        for (let i = 0; i < graph[currNode].length; i++) {
            let nextDistance = currCnt + 1
            if (nextDistance < d[graph[currNode][i]]) {
                d[graph[currNode][i]] = nextDistance
                queue.push({ currNode: graph[currNode][i], currCnt: nextDistance })
            }
        }
      console.log(queue);
    }
})

const [N, M, K, X] = input().split(' ').map((element) => parseInt(element))
let d = new Array(N + 1).fill(987654321)
let graph = Array.from(Array(N + 1), () => Array())

for (let i = 0; i < M; i++) {
    let [from, to] = input().split(' ').map((element) => parseInt(element))
    graph[from].push(to)
}
// console.table(graph)
bfs(X)
let flag = 0
// console.table(d)
d.forEach((A, idx) => {
    if (A === K) {
        flag = 1
        console.log(idx)
    }
})
if (!flag) {
    console.log(-1)
}