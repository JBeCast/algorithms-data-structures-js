// A naive approach to a hash function. Works only with strings.

// We'll be implementing hash tables using arrays, so a parameter for the
// function is the array length, as we want to limit it.

const hash = (key, arrayLen) =>
  [...key].reduce(((acc, char) => acc + char.charCodeAt(0) - 96), 0) % arrayLen;
