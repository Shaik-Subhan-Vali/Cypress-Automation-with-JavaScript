function calculateOddSum(numbers) {
    return numbers.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function containsPrime(numbers) {
    return numbers.some(isPrime);
}

function findPrimes(numbers) {
    return numbers.filter(isPrime);
}

const numbers = [3, 8, 5, 12, 7, 14, 11];

const oddSum = calculateOddSum(numbers);
console.log("Sum of odd numbers:", oddSum);

const hasPrimes = containsPrime(numbers);
console.log("Contains prime numbers:", hasPrimes);

if (hasPrimes) {
    const primeNumbers = findPrimes(numbers);
    console.log("Prime numbers:", primeNumbers);
}

const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log("Average of numbers:", average);

const maxNumber = Math.max(...numbers);
console.log("Maximum number:", maxNumber);

const minNumber = Math.min(...numbers);
console.log("Minimum number:", minNumber);

const sortedArray = numbers.slice().sort((a, b) => a - b);
console.log("Sorted array:", sortedArray);

const reversedArray = sortedArray.slice().reverse();
console.log("Reversed array:", reversedArray);
