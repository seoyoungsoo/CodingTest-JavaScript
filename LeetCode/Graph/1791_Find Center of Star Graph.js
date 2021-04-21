// 1791번 Find Center of Star Graph

const findCenter = (edges) => {
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1];
}

const edges = [[1,2],[2,3],[4,2]];
console.log(findCenter(edges));