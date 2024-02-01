
// Find an Array element

let myArray = [10, 20, 30, 40, 50];
let elementToFind = 300;

// Find the index of the element in the array
let index = myArray.indexOf(elementToFind);


if (index !== -1) {
    console.log(`Element ${elementToFind} found at index ${index}`);
} else {
    console.log(`Element ${elementToFind} not found in the array`);
}
