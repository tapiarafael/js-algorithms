// Calculate a factorial of a number;

function fact(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// O(n)

console.log(fact(3)); // 6
console.log(fact(5)); // 120