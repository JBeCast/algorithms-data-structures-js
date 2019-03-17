const charCount = str => {
  const frequency = {};

  for (let char of str) {
    const c = char.toLowerCase();
    /[a-z0-9]/.test(c) && (frequency[c] ? frequency[c]++ : frequency[c] = 1);
  }

  return frequency;
}

module.exports = charCount;
