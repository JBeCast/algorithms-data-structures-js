// Return an array with the first two numbers in the input array whose sum is zero.
// Return null if there's no such pair.
// Input will be a sorted array of numbers.
// We'll use the "multiple pointers" pattern

const sumZero = input => {
  // We define one pointer at each side of the array
  let [L, R] = [0, input.length - 1];

  // While the pointers don't cross over
  while (L < R) {
    // If the sum is zero, we can already return the pair
    if (input[L] + input[R] === 0) return [input[L], input[R]];

    // If the sum of the values is bigger than the largest,
    // they're both the same sign and will never add up to zero
    if (input[L] * input[R] > 0) return null;

    // Move the adequate pointer
    input[L] + input[R] > 0 ? R-- : L++;
  }

  return null;
}

module.exports = sumZero;
