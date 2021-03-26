const solution = (array, commands) => {
  const answer = [];

  commands.forEach((command) => {
    let arr = array.slice(command[0]-1, command[1]);
    
    arr.sort((a, b) => a - b);
    answer.push(arr[command[2]-1]);
  })
  return answer;
}

array = [1, 5, 2, 6, 3, 7, 4];
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));