function solve(arr) {

    let k = Number(arr.shift());
    
    let firstNumbersAsArr = arr.slice(0, k);
    let lastNumbersAsArr = arr.slice((arr.length - k), arr.length);
    
    let firstResult = "";
    let lastResult = "";
    
    for (let symbol of firstNumbersAsArr) {
        firstResult+= symbol + " ";
    }
    
    for (let symbol of lastNumbersAsArr) {
        lastResult+= symbol + " ";
    }
    
    console.log(firstResult);
    console.log(lastResult);
    
    }
solve([2, 
    7, 8, 9]
    )