// To this search algorithm work, the array NEED to be sorted.

// Best case (Number is in the middle of array) => O(1);
// Avg/Worst case (Number is at the beginning or end) => O(log n);
function findElementIndex(arr, el) {
  let startIndex = 0;
  let endIndex = arr.length -1;
  
  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    console.log({startIndex, endIndex, middleIndex});
  
    if (el === arr[middleIndex]) return middleIndex;

    if (el > arr[middleIndex]) {
      startIndex = middleIndex +1;
    } else {
      endIndex = middleIndex -1;
    }
  }
}

// Does the same, but using recursion
// Best case (Number is in the middle of array) => O(1);
// Avg/Worst case (Number is at the beginning or end) => O(log n);
function findElementIndexRecursive(arr, el, offset = 0) {
  let startIndex = 0;
  let endIndex = arr.length -1;
  
  const middleIndex = Math.floor((endIndex - startIndex) / 2);

  if (el === arr[middleIndex]) return middleIndex + offset;

  if (el > arr[middleIndex]) {
    startIndex = middleIndex +1;
    offset += middleIndex + 1;
  } else {
    endIndex = middleIndex;
  }
  return findElementIndexRecursive(arr.slice(startIndex, endIndex + 1), el, offset);
}

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElementIndexRecursive(arr, 99));