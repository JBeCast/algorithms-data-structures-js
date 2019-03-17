// Implement a function called areThereDuplicates which accepts a variable
// number of arguments, and checks whether there are any duplicates among the
// arguments passed in.

function areThereDuplicates() { // Arrow functions don't receive the array-like object called arguments
  const freq = {};

  for (let i of arguments)
    if (freq[i]) return true;
    else freq[i] = 1;

  return false;
}

module.exports = areThereDuplicates;
