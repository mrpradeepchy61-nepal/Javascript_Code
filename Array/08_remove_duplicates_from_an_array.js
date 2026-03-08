// REMOVE ALL DUPLICATES FROM AN ARRAY

let arr = [1,2,2,3,4,4,5,6,6,5,7]

let uniqueElement = new Set(arr)

let newArr = [...uniqueElement]

console.log(newArr)