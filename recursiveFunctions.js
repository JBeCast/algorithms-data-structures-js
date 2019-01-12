// Implement the following functions recursively

// Power function for possitive integer bases and exponents
const pow = (base, exp) => exp === 0 ? 1 : base * pow(base, exp - 1);

// factorial
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

// Product of the numbers in an array
const arrProd = arr => arr.length ? arr.pop() * arrProd(arr) : 1;

// Add up all numbers from 0 to the positive integer provided
const range = n => n < 1 ? n : n + range(n - 1);

// Return the nth number in the Fibonacci sequence
const fib = n => n <= 2 ? 1 : fib(n - 2) + fib(n - 1);


// Again some dirty tests 
console.log(pow(3, 3)); // 27
console.log(factorial(5)); // 120
console.log(arrProd([1, 2, 3, 10])); // 60
console.log(range(10)); // 55

console.log(fib(2)) // 1
console.log(fib(4)) // 3
console.log(fib(7)) // 13
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
