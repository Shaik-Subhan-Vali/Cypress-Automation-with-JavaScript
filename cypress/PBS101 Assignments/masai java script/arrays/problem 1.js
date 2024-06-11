function findPalindromes(numStrings, stringList) {
    let p = [];
    for (let i = 0; i < numStrings; i++) {
        if (isPalindrome(stringList[i])) {
            p.push(stringList[i]);
        }
    }
    if (p.length > 0) {
        console.log("Palindromes found in the list are: " + p.join(" "));
    } else {
        console.log("No palindromes found.");
    }
}

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

let numStrings = 5;
let stringList = ["radar", "hello", "madam", "world", "level"];
findPalindromes(numStrings, stringList);
