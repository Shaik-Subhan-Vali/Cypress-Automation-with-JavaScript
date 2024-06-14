function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function findPalindromes(stringList) {
    const palindromes = [];
    for (let str of stringList) {
        if (isPalindrome(str)) {
            palindromes.push(str);
        }
    }
    return palindromes;
}

const numStrings = 5;
const stringList = ["radar", "hello", "madam", "world", "level"];

const palindromes = findPalindromes(stringList);

if (palindromes.length > 0) {
    console.log("Palindromes found in the list are: " + palindromes.join(" "));
} else {
    console.log("No palindromes found.");
}
