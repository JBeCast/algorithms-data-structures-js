// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the
// characters in the second string. In other words, the function should check
// whether the characters in the first string appear somewhere in the second
// string, without their order changing.

function isSubsequence(sub, str) {
    let p = 0;
    for (let c of str) {
        if (c === sub[p]) p++;
        if (p === sub.length) return true; // We've covered the whole substring
    }
    
    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
