// 최소직사각형

const solution = (sizes) => {
  let width = Math.max(...sizes[0]);
  let height = Math.min(...sizes[0]);

  for (let i = 1; i < sizes.length; i++) {
    let [max, min] = [Math.max(...sizes[i]), Math.min(...sizes[i])];

    width = width < max ? max : width;
    height = height < min ? min : height;
  }

  return width * height;
};

const sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];
console.log(solution(sizes));
