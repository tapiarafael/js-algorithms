// Determine whether an input number is a prime number

function isPrime(n) {
  for (let i = 2; i < n; i++) { // 1
    if (n % i === 0) { // n
      return false; // 1
    }
  }
  return true; // 1
}

// Best Case: number = 1 or number = 2 => O(1)
// Average Case: O(n)
// Worst Case: number = 27277 => O(n)

function isPrimeImproved(n) {
  let sqrt = Math.sqrt(n); // 1
  for (let i = 2; i <= sqrt; i++) { // 1
    if (n % i === 0) return false; // √n - 2
  }
  return true; // 1
}

// T = 1 + 1 + 1 + √n-2 => T = 3 + √n-2 => T = √n-2 => T = √n
// O(√n)
// Best Case: number = 1 or number = 2 => O(1)
// Avg/Worst Case: O(√n)

console.log(isPrime(5)); // true
console.log(isPrime(9)); // false  