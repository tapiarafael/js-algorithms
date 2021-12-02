function sort(arr) {
  const arrCopy = [...arr];

  if (!arrCopy.length) {
    return arrCopy;
  }

  const smallerElArr = [];
  const biggerElArr = [];
  const pivotEl = arrCopy.shift(); 
  const centerElArr = [pivotEl];

  while (arrCopy.length) {
    const currrentEl = arrCopy.shift();
    if (currrentEl === pivotEl) {
      centerElArr.push(currrentEl);
    } else if (currrentEl < pivotEl) {
      smallerElArr.push(currrentEl);
    } else {
      biggerElArr.push(currrentEl);
    }
  }

  const sortedSmallArr = sort(smallerElArr);
  const sortedBiggerArr = sort(biggerElArr);

  return sortedSmallArr.concat(centerElArr, sortedBiggerArr);
}

// ## Using Master Theorem ##
// Recursive step runtime: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Runtime outside the recursion: O(n)
// Algorithm runtime: O((n^logb(a)) * log n) => O(n * log n)
// O(n * log n);

console.log(sort([-3, 10, 1, 100, -3, -10, 22, 15]));