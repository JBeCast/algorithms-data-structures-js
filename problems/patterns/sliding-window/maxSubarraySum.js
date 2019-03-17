// Function that takes an array and a number and returns the maximum sum of n
// consecutive elements in the array.

const maxSubarraySum = (arr, n) => {
  // Edge cases
  if (arr.length < n || n <= 0) return null;

  // currentSum will keep the sum of the current sliding window
  let currentSum = 0;

  // Calculate the sum for the initial sliding window
  for (i = 0; i < n; i++) currentSum += arr[i];

  // maxSum will keep the result we need to return
  maxSum = currentSum;

  // Slide the window across the array and update currentSum
  for (let i = n; i < arr.length; i++) {
    currentSum = currentSum - arr[i - n] + arr[i];
    maxSum = Math.max(currentSum, maxSum);
  }

  // return the maxSum
  return maxSum;
}

module.exports = maxSubarraySum;
