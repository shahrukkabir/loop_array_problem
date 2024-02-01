// Maximum and Minimum of Array

let myArray = [10, 5, 8, 3, 15, 7];

let maxValue = myArray[0];
let minValue = myArray[0];

for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > maxValue) {
        maxValue = myArray[i];
    }

    if (myArray[i] < minValue) {
        minValue = myArray[i];
    }
}