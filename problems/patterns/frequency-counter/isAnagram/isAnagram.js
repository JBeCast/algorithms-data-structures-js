const isAnagram = (str1, str2) => {
  // Return false if strings are not the same length
  if (str1.length !== str2.length) return false;

  // Frequency of each letter in the first string
  const freq = {};

  // iterate through the first string and count the letter frequency
  for (let c of str1) freq[c] = freq[c] ? freq[c] + 1 : 1;

  // Make sure that each letter has the same frequency in the second string
  // Note: freq[c] will be falsey if freq doesn't contain the letter, or has 0 value
  for (let c of str2)
    if (!freq[c]) return false;
    else freq[c]--;

  return true;
}

module.exports = isAnagram;
