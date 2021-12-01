// Determine if a number is a power of two 

function isPowerOfTwo(num) {
  if (num < 1) return false;

  let divNumber = num;
  while(divNumber !== 1) {
    if (divNumber % 2 !== 0) return false
    divNumber /= 2;
  }
  return true;
}

// Best => O(1)
// Avg/Worst => O(log2 n) or O(log n )

function isPowerOfTwoImproved(num) {
  if (num < 1) return false;
  // Use bitwise operator AND 
  // that always return 0 for power 2 numbers
  return (num & (num-1)) === 0;
}

// O(1)

console.log(isPowerOfTwoImproved(8)); // true
console.log(isPowerOfTwoImproved(5)); // false
