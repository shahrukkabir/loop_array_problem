
const frequencyArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const sampleNumber = '9223843002357834322';

for (let i = 0; i < sampleNumber.length; i++) {
    const digit = parseInt(sampleNumber[i]);
    frequencyArray[digit]++;
}

let maxOccurrence = frequencyArray[0];
let maxOccurrenceIndex = 0;

for (let i = 0; i < frequencyArray.length; i++) {
    const currentOccurrence = frequencyArray[i];
    if (currentOccurrence > maxOccurrence) {
        maxOccurrence = currentOccurrence;
        maxOccurrenceIndex = i;
    }
}

console.log(`The digit ${maxOccurrenceIndex} has the maximum occurrence of ${maxOccurrence} times.`);
