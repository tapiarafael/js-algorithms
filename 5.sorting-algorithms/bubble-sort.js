// Compare two items at a time and sort them.
// Run the array multiple times until all pairs
// were compared and sorted.

function sort(arr, order) {
  let a = 0;
  const resultArray = [...arr];
  const fn = {
    asc: (a,b) => a > b,
    desc: (a,b) => a <b,
  }

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer];
    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      a++
      let innerEl = resultArray[inner];

      if (fn[order](outerEl, innerEl)) {
        resultArray[outer] = innerEl;
        resultArray[inner] = outerEl;

        outerEl = resultArray[outer];
        innerEl = resultArray[inner];
      }
    }
  }
  console.log({a, l: arr.length, r: a-arr.length})
  return resultArray;
}

// O(n^2)
// Two nested for loops...

console.log(sort([3, 2, -1, 1, 10, 5], 'asc'));
console.log(sort([5, 10, -3, -10, 1, 100, 99], 'desc'));