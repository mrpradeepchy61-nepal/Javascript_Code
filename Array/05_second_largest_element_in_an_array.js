// How to find second largest element in an array?

let myArr = [10, 12, 8, 5, 6, 20]
let sortedArr = myArr.sort((a,b) => a-b) // this is an compare function to sort numbers in ascending order
let second_largest = myArr[myArr.length-2]
console.log(sortedArr);

console.log("Second largest element in an array is: ", second_largest);