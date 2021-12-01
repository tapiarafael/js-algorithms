// Calculate a factorial of a number;

function fact(n) {
  if (n === 1) return 1;
  
  return n * fact(n - 1);
}

// O(n)

console.log(fact(3)); // 6
console.log(fact(5)); // 120