// FIND THE PAIRS OF AN INTEGER IN AN ARRAY WHOSE SUM IS EQUAL  TO A GIVEN NUMBER.

// let arr = [1,2,3,4,5,6]
// let target = 10

// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]+arr[j]===target){
//             console.log(arr[i],arr[j])
//         }
//     }
// }


//BY UNSING FUNCTION

function findPairs(myArr,Target){
    let result = ""
    for(let i=0; i<myArr.length; i++){
        for(let j=i+1; j<myArr.length; j++){
            if(myArr[i] + myArr[j] === Target){
                result += myArr[i] +" " + myArr[j]
            }
        }
    }
    return result;
}



let myArr = [1,2,3,4,5,6]
let Target = 10
console.log(findPairs(myArr,Target));