function containsAllSquares(arr1, arr2) {
    // Return true if the second array contains all of the numbers in the first array squared.
    // Order doesn't mutter, but frequency must be the same, e.g:
    // containsAllSquares([1,2,3], [4,1,9]) === true
    // containsAllSquares([1,2,3], [1,9]) === false
    // containsAllSquares([1,2,1], [4,1,4]) === false

    // Object containing the frequency of the squar of each element in arr1
    const freq = {};

    // If they are not the same length, return false (frequency matters)
    if (arr1.length !== arr2.length) return false;

    // Iterate through array indexes
    for (let i of arr1) freq[i**2] ? freq[i**2]++ : freq[i**2] = 1;

    // Iterate through the second array and subtract 1
    for (let i of arr2) if (!freq[i]) { return false } else freq[i]--;

    // Note: time complexity is not O(n^2), it's O(2n) which is O(n)

    return true;
}

console.log(containsAllSquares([1,2,3], [4,1,9]));              // true
console.log(containsAllSquares([1,2,3], [1,9]));                // false
console.log(containsAllSquares([1,2,1], [4,1,4]));              // false
console.log(containsAllSquares([1,2,3,2,1,5], [1,4,9,4,1,25])); // true
