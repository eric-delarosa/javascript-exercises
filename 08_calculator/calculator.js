const add = function(a, b) {
  return a + b;

};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
  }
  return prod;
};

const power = function(num, exp) {
  let tot = 1;
  for (let i = 0; i < exp; i++) {
    tot *= num;
  }
  return tot;
};

const factorial = function(val) {
  if (val === 0) {
    return 1;
  }
  return val * factorial(val - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
