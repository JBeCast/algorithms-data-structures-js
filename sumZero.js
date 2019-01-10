// Return an array with the first two numbers in the input array whose sum is zero.
// Return null if there's no such pair.
// Input will be a sorted array of numbers.
// We'll use the "multiple pointers" pattern

function sumZero(input) {
    // We define one pointer at each side of the array
    let L = 0;
    let R = input.length - 1;

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

// Some basic dirty tests without a test framework
console.log(sumZero([-3,2,1,0,1,2,3])); // [-3,3]
console.log(sumZero([-5,-2,1,3,5,7,9])); // [-5,5]
console.log(sumZero([-15,-14,-5,-2,-1,1,2,3,7,9])); // [-2,2]
console.log(sumZero([-15,-14,-5,-1,1,2,3,7,9])); // [-1,1]
console.log(sumZero([-7,-3,-2,1,5,8])); // null
console.log(sumZero([-13,-10,-9,1,5,8])); // null
console.log(sumZero([1,2,3,4,5])); // null
console.log(sumZero([-1,-2,-3,-4,-5])); // null
