function sumFirstLast(input) {
    
let numberArr = input.map(Number);


let first = numberArr.shift();
let last = numberArr.pop()

let result = first + last

console.log(result);

}
sumFirstLast(['20', '30', '40'])