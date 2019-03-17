// Function that takes a sorted array of numbers as input and counts the
// unique values in the array.

const countUniqueValues = arr => {
  // If the array is empty, there are no unique values
  // If it's of length 1, there's one unique value
  if (arr.length <= 1) return arr.length;

  // If the array has at least one item, we know that there's going to be at least one unique item
  let count = 1;

  // Left and right pointers that will move together
  let [L, R] = [0, 1];

  // Sweep the array and increment the counter when the two values are different
  while (R < arr.length) {
    if (arr[L] !== arr[R]) count++;
    L++;
    R++;
  }

  return count;
}

module.exports = countUniqueValues;
