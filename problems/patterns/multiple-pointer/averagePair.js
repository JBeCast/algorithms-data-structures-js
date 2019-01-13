// Write a function called averagePair. Given a sorted array of integers and a
// target average, determine if there is a pair of values in the array where
// the average of the pair equals the target average. There may be more than
// one pair that matches the average target.

function averagePair(arr, avg) {
    let L = 0,
        R = arr.length - 1;
    
    while (L < R) {
        const currAvg = (arr[L] + arr[R]) / 2;
        if (currAvg === avg) return true;
        else if (currAvg < avg) L++;
        else R--;
    }

    return false;
}


console.log(averagePair([1,2,3], 2.5)); // true (2 and 3)
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); // true (6 and 10)
console.log(averagePair([1,3,3,5,6,7,10,12,19], 7.1)); // false
console.log(averagePair([1,3,3,5], 7)); // false
