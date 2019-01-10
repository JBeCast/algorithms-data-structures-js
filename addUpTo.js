// Naive approach
function addUpTo(n) {
    let total = 0;
    for (let i=1; i <= n; i++) total += i;
    return total;
}

// "Gaussian", efficient approach
function addUpToV2(n) {
    return n > 1 ? n + addUpTo(n - 1) : 1;
}
