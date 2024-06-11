function solveProblem(array1, array2) {
    const concatenatedArray = array1.concat(array2);
    console.log("Concatenated array: " + concatenatedArray);

    const extractedArray = concatenatedArray.slice(2, 5);
    console.log("Extracted portion: " + extractedArray);

    const index7 = extractedArray.indexOf(7);
    if (index7 !== -1) {
        console.log("Index of number 7: " + index7);
    } else {
        console.log("Number 7 not found.");
    }

    if (array1.includes(10)) {
        console.log("Number 10 is present in array1.");
    } else {
        console.log("Number 10 is not present in array1.");
    }

    const joinedString = extractedArray.join("-");
    console.log("Joined string: \"" + joinedString + "\"");

    extractedArray.reverse();
    console.log("Reversed array: " + extractedArray);

    const sumArray2 = array2.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of array2: " + sumArray2);

    array1.sort((a, b) => a - b);
    console.log("Sorted array1: " + array1);
}

const array1Length = 4;
const array2Length = 3;
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7];

solveProblem(array1, array2);
