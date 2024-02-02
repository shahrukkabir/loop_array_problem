// Filter an array

const purchaseHistory = [100, 200, 500, 150, 125];
const filteredHistory = [];

for (let i = 0; i < purchaseHistory.length; i++) {
    const currentElement = purchaseHistory[i];
    if (currentElement <= 200) {
        filteredHistory.push(currentElement);
    }
}

console.log("Original Purchase History:", purchaseHistory);
console.log("Filtered History (<= 200):", filteredHistory);

/*

//using .filter()

const purchaseHistory = [100, 200, 500, 150, 125];

const filteredHistory = purchaseHistory.filter ( function (currentElement) { 
    return currentElement <= 200 ;
 } );

console.log("Original Purchase History:", purchaseHistory);
console.log("Filtered History (<= 200):", filteredHistory);

*/

//Calculating Discount

const discountedPrice = [ ];
for(let i = 0 ; i< purchaseHistory.length ; i++ ){
    const currentElement = purchaseHistory[i];
    if(currentElement>200){
        const calculatedDiscount = currentElement - currentElement * 10/100 ;
        discountedPrice.push(calculatedDiscount);
    }
    else{
        discountedPrice.push(currentElement);
    }
}
// console.log(discountedPrice); 


const discountedPriceUsingMap = purchaseHistory.map(function(currentElement){
    if(currentElement>200){
        const calculatedDiscount = currentElement - currentElement * 10/100 ;
        return calculatedDiscount;
    }
    else{
        return currentElement;
    }
})
// console.log(discountedPriceUsingMap);
