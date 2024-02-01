//swap array elements

let myArray = [1, 2, 3, 4, 5];
console.log("Original Array:", myArray);


let temp = myArray[1];
myArray[1] = myArray[3];
myArray[3] = temp;

console.log("Array after swapping:", myArray); 
