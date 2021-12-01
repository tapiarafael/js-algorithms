function linearSearchIndex(arr, el, comparatorFn) {
  for (let i = 0; i < arr.length; i++) {
    if(typeof el === 'object' && el !== null && comparatorFn(el, arr[i])) {
      return i;
    }
    if(el === arr[i]) return i;
  }
}

const arr = [5, 3, 10, -10, 33, 51];
const objects = [
  { name: 'Max', age: 31 },
  { name: 'John', age: 32 },
]

console.log(linearSearchIndex(arr, 10));
console.log(linearSearchIndex(arr, 33));
console.log(linearSearchIndex(objects, { name: 'John', age: 32 }, (a, b) => a.name === b.name && a.age === b.age));