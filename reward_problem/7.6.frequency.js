//Frequency Array

const frequencyArray = [ 0 , 0 , 0 , 0 , 0 , 0 ,0]

const sampleNumber = '9223843002357834322'
for(let i =0 ; i<sampleNumber.length ; i++){
    const currentDigit= sampleNumber[i];
    frequencyArray[currentDigit]++;
}
console.log(frequencyArray);