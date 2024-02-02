const serial = [ 22 , 33 , 44 , 55 , 66 , 77 , 88];

// const serial = [ 55 , 66 , 77 , 88 , 22 , 33 , 44 ];

const target = 55 ;
while(true){
    const firstElement = serial[0];
    if(firstElement == target){
        break;
    }
    const extractedElement = serial.shift();
    serial.push(extractedElement);
}
console.log(serial);