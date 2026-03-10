let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];

let newArray = [...arr1, ...arr2];

let myArr = new Set(newArray);

console.log([...myArr]);
