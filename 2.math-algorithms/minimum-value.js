// Return the minimum value of an array
// i.e. the smallest number

function minimum(numbers) {
  let minimumValue = numbers[0]; // 1
  for(const number of numbers) {// 1
    if (number < minimumValue) { // n
      minimumValue = number; // n
    }
  }
  return minimumValue; // 1
}

// Best/Avg/Worst case: O(n);

console.log(minimum([3, 1, 2]));
console.log(minimum([10, 20, 30, 40, 50, 1]));