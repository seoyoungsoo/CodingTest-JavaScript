// 직업군 추천하기

const solution = (table, languages, preference) => {
  const scores = [5, 4, 3, 2, 1];
  const arr = {};
  
  table.forEach((v, i) => {
    const value = v.split(' ');
    const job = value.shift();
    arr[job] = 0;

    languages.forEach((language, i) => {
      const score = scores[value.indexOf(language)];
      
      if (score) {
        arr[job] += score * preference[i];
      }
    })
  })

  let max = 0;
  let tmp = [];
  for (let item in arr) {
    if (arr[item] > max) {
      max = arr[item];
      tmp = [item];
      continue;
    }
    if (arr[item] === max) {
      tmp.push(item);
      continue;
    }
  }

  const res = tmp.sort();
  
  return res[0];
}

const table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
const languages = ["PYTHON", "C++", "SQL"];
const preference = [7, 5, 5];

// const table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
// const languages = ["JAVA", "JAVASCRIPT"];
// const preference = [7, 5];
console.log(solution(table, languages, preference));