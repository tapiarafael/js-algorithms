function sumNumbers(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function sumNumbers2(numbers) {
  let result = 0; // 1
  for(let num of numbers) { // 1
    result += num; // n
  }
  return result; // 1
}

// Both function are pratically the same.
// The function run through the array summing the elements.

// T = 1+1+1+n => T = 3+1n
// T = n
// O(n) -> Linear time complexity

console.log(sumNumbers([1, 3, 10]));
console.log(sumNumbers2([1, 3, 10]));