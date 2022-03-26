function negativeOrPositive(stringArr){

let numberArr = stringArr.map(Number);
let result = [];


for (const el of numberArr) {
    
    if(el >= 0){
        result.push(el);
    }else{
        result.unshift(el);
    }

}

console.log(result.join("\n"));


}
negativeOrPositive(['7', '-2', '8', '9'])