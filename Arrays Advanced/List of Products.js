function sortList(arr){

let sortedArr = arr.sort();

for (const index in sortedArr) {
   console.log(`${Number(index) + 1}.${sortedArr[index]}`);
}


}
sortList(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])