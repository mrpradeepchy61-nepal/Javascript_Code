// How to find smallest element in an array?


// let arr = [10,20,15,12,16,11]
// let smallest = arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<smallest){
//         smallest = arr[i]
//     }
// }
// console.log("The smallest element is: ", smallest);


//---------using inbuilt function-------

let myArr = [10, 20 ,30, 40]
let smallest = Math.min(...myArr)
console.log("The smallest element is: ", smallest);
