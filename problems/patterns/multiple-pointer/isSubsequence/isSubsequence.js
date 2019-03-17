// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the
// characters in the second string. In other words, the function should check
// whether the characters in the first string appear somewhere in the second
// string, without their order changing.

const isSubsequence = (sub, str) => {
  let p = 0;
  for (let c of str) {
    if (c === sub[p]) p++;
    if (p === sub.length) return true; // We've covered the whole substring
  }

  return false;
}

module.exports = isSubsequence;