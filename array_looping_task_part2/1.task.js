/*
 
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red'] 

*/

/* 
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

console.log(reversedColors); 
*/

/* 
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors=colors.reverse();
console.log(reversedColors); 
*/


//using while loop

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];
let i = colors.length - 1;

while (i >= 0) {
  reversedColors.push(colors[i]);
  i--;
}

console.log(reversedColors);
