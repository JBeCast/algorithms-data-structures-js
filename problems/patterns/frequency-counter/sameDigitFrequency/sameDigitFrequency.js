// Given two positive integers, find out if both have the same frequency for each digit,
// i.e. they are "alphanumeric anagrams".

const sameDigitFrequency = (n1, n2) => {
  // We turn the numbers into strings so we can iterate through each character
  let [s1, s2] = [n1.toString(), n2.toString()];

  // If they are not the same length, digits can't have all the same frequency
  if (s1.length !== s2.length) return false;

  // Object keeping the frequency of each digit
  const freq = {};

  // We iterate over the first number (string) and keep the frequency of each digit
  for (let d of s1) freq[d] = freq[d] ? freq[d] + 1 : 1;

  // We iterate over the second number and return false if some digit doesn't have the same frequency
  // Note: time complexity is not O(n^2), it's O(2n) which is O(n)  
  for (let d of s2)
    if (!freq[d]) return false;
    else freq[d]--;

  // Both numbers have the same digits in the same frequency
  return true;
}

module.exports = sameDigitFrequency;
