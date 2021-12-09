function cartProduct(setA, setB) {
  const product = [];

  for (let a of setA) {
    if (!Array.isArray(a)) a = [a];
    for (const b of setB) {
      product.push([...a, b]);
    }
  }

  return product;
}

function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }

  return tempProduct;
}

const colors = ['blue', 'red'];
const sizes = ['S', 'M', 'L', 'XL'];
const styles = ['round neck', 'v neck'];

console.log(cartesian(colors, sizes, styles));

// Time complexity: O(n^x)
// Space complexity: O(n^x)