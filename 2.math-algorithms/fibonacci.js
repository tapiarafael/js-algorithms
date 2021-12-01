// Return the nth element of the Fibonacci sequence.
// e.g. fib(4) yields 5.

function fin(n) {
  const fibonacciNumbers = [1, 1]; // 1
  for (let i = 2; i <= n; i++) { // 1
    let result = fibonacciNumbers[i-2] + fibonacciNumbers[i-1]; // n - 1
    fibonacciNumbers.push(result); // n - 1
  }
  return fibonacciNumbers[n]; // 1
}

// T = 1 + 1 + 1 + 2(n-1) => T = 3 + 2n - 2 => T = 1 + 2n => T = 2n = n
// O(n) => Linear time complexity

console.log(fin(5));