// Given a number, return true if it's a even number
// and return false if it's a odd number.

function isEven(n) {
  return n % 2 === 0; // 1
}

// O(1) Constant time complexity

console.log(isEven(2)); // true
console.log(isEven(3)); // false