function lastKNumbers(n, k){

let result = [1];

let negative = -1 * k;

while(result.length != n){
    let neededNums = result.slice(negative);

    let nextNum = neededNums.reduce((a,b)=> a + b, 0);

    result.push(nextNum);

}

console.log(result.join(" "));


}
lastKNumbers(8, 2)