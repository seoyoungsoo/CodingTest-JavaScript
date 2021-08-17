// 1927번 최소 힙

const fs = require('fs')
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `9
0
12345678
1
2
0
0
0
0
32`
).split('\n')

const input = (() => {
  let line = 0
  return () => stdin[line++]
})()

// 두 번째 풀이
// 힙을 구현하여 문제를 풀어나간다.
class minHeap {
  constructor() {
    this.nodes = [];
  }

  insert(data) {
    this.nodes.push(data);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;
    
    const currentNode = this.nodes[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIndex];
    // 부모 노드의 값이 더 작거나 같다면
    if (parentNode <= currentNode) return;

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
    }
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const length = this.nodes.length;
    let minimum = index;

    if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
        minimum = leftChildIndex;
      }
    }
    if (this.nodes[leftChildIndex] > this.nodes[rightChildIndex]) {
      if (rightChildIndex <= length && this.nodes[rightChildIndex] < this.nodes[minimum]) {
        minimum = rightChildIndex;
      }
    } else {
      if (leftChildIndex <= length && this.nodes[leftChildIndex] < this.nodes[minimum]) {
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

const heap = new minHeap();
const N = parseInt(input());
const value = Array.from({length: N}, () => parseInt(input()));
const res = [];


for (let v of value) {
  if (v !== 0) {
    heap.insert(v);
  } else {
    if (heap.nodes.length === 0) {
      res.push(0);
    } else {
      res.push(heap.extract());
    }
  }
}

console.log(res.join('\n'));

// 첫 번째 풀이
// 힙을 구현하지 않고 문제를 풀어나가 시간 초과가 발생했다.
// const minHeap = (v) => {
//   if (!v) {
//     if (!arr.length) return 0;
    
//     const tmp = Math.min(...arr);
//     arr.splice(arr.indexOf(tmp), 1);

//     return tmp;
//   }
//   arr.push(v);
// }

// let arr = [];
// const N = parseInt(input());

// for (let i = 0; i < N; i++) {
//   let res = minHeap(parseInt(input()));
//   if (res !== undefined) {
//     console.log(res);
//   }
// }