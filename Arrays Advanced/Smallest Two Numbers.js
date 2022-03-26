function smallestTwoNumbers(arr){

let result = [];
let currentSmallNum 

while(result.length < 2){


    let filteredArr = arr.filter(x => x !== currentSmallNum);

    currentSmallNum = Math.min(...filteredArr);

    result.push(currentSmallNum);
 
 

}

console.log(result.join(" "));


}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])