// Given two positive integers, find out if both have the same frequency of digits,
// i.e. they are "alphanumeric anagrams".

function sameDigitFrequency(n1, n2) {
    // Deconstruction?
    // We turn the numbers into strings so we can iterate through them
    let s1 = n1.toString(),
        s2 = n2.toString();

    // If they are not the same length, digits can't have all the same frequency
    if (s1.length !== s2.length) return false;

    // Object keeping the frequency of each digit
    const freq = {};
    
    // We iterate over the first number (string) and keep the frequency of each digit
    for (let d of s1) freq[d] = freq[d] ? freq[d] + 1 : 1;

    // We iterate over the second number and return false if some digit doesn't have the same frequency
    for (let d of s2) if (!freq[d]) return false;
    else freq[d]--;

    // Both numbers have the same digits in the same frequency
    return true;
}

console.log(sameDigitFrequency(34, 43)); //true
console.log(sameDigitFrequency(2778, 8727)); // true
console.log(sameDigitFrequency(555, 555)); // true
console.log(sameDigitFrequency(555, 5555)); // false
console.log(sameDigitFrequency(323, 32)); // false

// console.log(sameDigitFrequency());
