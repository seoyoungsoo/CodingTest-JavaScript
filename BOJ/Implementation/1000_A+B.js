"use strict";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const B = parseInt(input[1]);
const A = parseInt(input[0]);

console.log(A + B);
