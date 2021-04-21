// 1409번 Queries on a Permutation With Key

const processQueries = (queries, m) => {
  const arr = Array.from({length:m}, (v, i) => i+1);
  const res = [];
  
  for (let i = 0; i < queries.length; i++) {
    let pos = arr.indexOf(queries[i]);
    res.push(pos);
    arr.splice(pos, 1);
    arr.unshift(queries[i]);
  }
  return res;
}

const queries = [3, 1, 2, 1], m = 5;
console.log(processQueries(queries, m));