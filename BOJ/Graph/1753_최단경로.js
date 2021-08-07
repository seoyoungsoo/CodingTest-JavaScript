// 1753번 최단경로
// 코드참조: https://minse5k.github.io/boj-1753/

// 우선순위 큐의 최소힙 정렬과 다익스트라 알고리즘을 사용한 풀이 방법
const fs = require('fs')
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5 6
1
5 1 1
1 2 2
1 3 3
2 3 4
2 4 5
3 4 6`
).split('\n')

const input = (() => {
  let line = 0
  return () => stdin[line++]
})()

class MinHeap {
  constructor() {
    this.nodes = [];
  }

  insert(v) {
    this.nodes.push(v);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;

    const currentNode = this.nodes[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIndex];
    if (parentNode.cost <= currentNode.cost) return;

    this.nodes[index] = parentNode;
    this.nodes[parentIndex] = currentNode;
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return min;
    };
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.nodes.length;
    let minimum = index;

    if (!this.nodes[rightChildIndex] && !this.nodes[leftChildIndex]) return;

    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex].cost < this.nodes[minimum].cost) {
        minimum = leftChildIndex;
      }
      return;
    }

    if (this.nodes[leftChildIndex].cost > this.nodes[rightChildIndex].cost) {
      if (rightChildIndex <= length && this.nodes[rightChildIndex].cost < this.nodes[minimum].cost) {
        minimum = rightChildIndex;
      }
    } else {
      if (leftChildIndex <= length && this.nodes[leftChildIndex].cost < this.nodes[minimum].cost) {
        minimum = leftChildIndex;
      }
    }

    if (minimum !== index) {
      let t = this.nodes[minimum];
      this.nodes[minimum] = this.nodes[index];
      this.nodes[index] = t;
      this.trickleDown(minimum);
    }
  }
}

const dijkstra = () => {
  let dist = new Array(V + 1).fill(Infinity);
  const q = [];
  dist[K] = 0;
  const minHeap = new MinHeap();
  minHeap.insert({
    vertex: K,
    cost: 0
  })

  while (minHeap.nodes.length) {
    const now = minHeap.extract();
    const start = now.vertex;
    const cost = now.cost;

    if (graph[start] === undefined) continue;
    if (dist[start] < cost) continue;

    for (let i = 0; i < graph[start].length; i++) {
      const nt = graph[start][i];
      const next = nt.vertex;
      const nextCost = nt.cost;
      if (dist[next] > cost + nextCost) {
        dist[next] = cost + nextCost;
        minHeap.insert({
          vertex: next,
          cost: dist[next],
        })
      }
    }
  }

  return dist;
}

const [V, E] = input().split(' ').map(e => parseInt(e));
const K = parseInt(input());
const graph = Array.from({length: V + 1}, () => []);
const res = [];

for (let i = 0; i < E; i++) {
  const [u, v, w] = input().split(' ').map(e => parseInt(e));
  
  graph[u].push({
    vertex: v,
    cost: w,
  })
}

const tmp = dijkstra();

for (let i = 1; i <= V; i++) {
  if (tmp[i] === Infinity) res.push('INF');
  else res.push(tmp[i]);
}

console.log(res.join('\n'));