function solve(input){

function doDouble(arr){

    let mapArr = arr.map((x)=> x * 2);

    return mapArr;
}

function takeOnlyOddIndexes(arr){
    let result = [];

    for (const index in arr) {
        if(index % 2 !== 0){
            result.push(arr[index]);
        }
    } 
    return result;
}

let doubleNumbers = doDouble(input);
let oddInexes = takeOnlyOddIndexes(doubleNumbers);
let finalResult = oddInexes.reverse();

console.log(finalResult.join(" "));


}
solve([10, 15, 20, 25])