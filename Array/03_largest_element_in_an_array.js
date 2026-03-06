//How to find the largest element in an array?



// let arr = [10, 20, 15, 12, 13]
// let largest = [0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>largest){
//         largest = arr[i];
//     }
// }
// console.log("The largest element is: ", largest);




// by using inbuilt function

let myArr = [1,2,3,4,5,6,7]
let largest = Math.max(...myArr)
console.log(largest);