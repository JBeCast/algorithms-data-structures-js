// Function that takes a sorted array of numbers as input and counts the
// unique values in the array.

function countUniqueValues(arr) {
  // If the array is empty, there are no unique values
  // If it's of length 1, there's one unique value
  if (arr.length <= 1) return arr.length;

  // If the array has at least one item, we know that there's going to be at
  // least one unique item
  let count = 1;

  // Left and right pointers that will move together
  let L = 0,
      R = 1;

  // Sweep the array and increment the counter when the two values are different
  while (R < arr.length) {
    if (arr[L] !== arr[R]) count++;
    L++;
    R++;
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 5])) // 5
console.log(countUniqueValues([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])) // 4
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([1])) // 0
console.log(countUniqueValues([1, 1])) // 1
console.log(countUniqueValues([1, 2])) // 1