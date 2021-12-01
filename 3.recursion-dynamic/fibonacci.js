// Return the nth element of the Fibonacci sequence.
// e.g. fib(4) yields 5.

// BAD example of recursion use
function fib(n) {
   if (n === 0 || n === 1) return 1;

   return fib(n-1) + fib(n-2);
}
// O(2^n) => Exponential time complexity

// Using dynamic programming
function fibDynamic(n, memo) {
  let result;

  if (memo[n]) return memo[n];

  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fibDynamic(n - 1, memo) + fibDynamic(n - 2, memo);
  }
  memo[n] = result;
  return result;
}
// O(n) => Linear time complexity

console.log(fibDynamic(50, {}));