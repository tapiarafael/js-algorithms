function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    let isBigger = arr[0] > arr[1];
    return isBigger ? [arr[1], arr[0]] : arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);
  
  const leftSortedArr = sort(leftArr);
  const rightSortedArr = sort(rightArr);

  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  while (
    leftArrIndex < leftSortedArr.length || 
    rightArrIndex < rightSortedArr.length
    ) {
      let endOfLeftArr = leftArrIndex >= leftSortedArr.length;
      let left = leftSortedArr[leftArrIndex];
      let right = rightSortedArr[rightArrIndex];

      if (endOfLeftArr || left > right) {
        mergedArr.push(right);
        rightArrIndex++;
      } else {
        mergedArr.push(left);
        leftArrIndex++;
      }
  }

  return mergedArr;
}

// ## Using Master Theorem ##
// Recursive step runtime: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Runtime outside the recursion: O(n)
// Algorithm runtime: O((n^logb(a)) * log n) => O(n * log n)
// O(n * log n);

console.log(sort([-3, 10, 1, 100, -3, -10, 22, 15]));