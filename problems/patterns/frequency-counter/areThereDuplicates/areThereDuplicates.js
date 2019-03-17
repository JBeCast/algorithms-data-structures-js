// Implement a function called, areThereDuplicates which accepts a variable
// number of arguments, and checks whether there are any duplicates among the
// arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates() {
    let freq = {};
   
    for (let i of arguments) if (freq[i]) return true;
    else freq[i] = 1;

    return false;
}


console.log(areThereDuplicates(5,1,2,3,4)); // false
console.log(areThereDuplicates(6,1,2,3,1)); // true
console.log(areThereDuplicates(1,2,3,2,2,2)); // true
console.log(areThereDuplicates(1,2,3,4,5,6,2)); // true
