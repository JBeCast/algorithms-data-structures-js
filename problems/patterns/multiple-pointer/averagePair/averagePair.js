// Write a function called averagePair. Given a sorted array of integers and a
// target average, determine if there is a pair of values in the array where
// the average of the pair equals the target average. There may be more than
// one pair that matches the average target.

const averagePair = (arr, avg) => {
  let [L, R] = [0, arr.length - 1];

  while (L < R) {
    const currAvg = (arr[L] + arr[R]) / 2;
    if (currAvg === avg) return true;
    else if (currAvg < avg) L++;
    else R--;
  }

  return false;
}

module.exports = averagePair;
