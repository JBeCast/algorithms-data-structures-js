// Function that takes an array and a number and returns the maximum sum of n
// consecutive elements in the array.

function maxSubarraySum(arr, n) {
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

console.log(maxSubarraySum([1, 2, 5, 3, 9, 3, 2], 3)) // 17
console.log(maxSubarraySum([1, 2, 5, 3, 9, 3, 2], 4)) // 20
console.log(maxSubarraySum([1, 2, 5, 3, 9, 3, 2], 1)) // 9
console.log(maxSubarraySum([5, 3, 9, 3, 2, 13, 15], 1)) // 28
console.log(maxSubarraySum([1, 2, 3], 3)) // 6
console.log(maxSubarraySum([1, 2], 3)) // null
console.log(maxSubarraySum([], 2)) // null
console.log(maxSubarraySum([1, 2, 5, 3, 9, 3, 2], -1)) // null
