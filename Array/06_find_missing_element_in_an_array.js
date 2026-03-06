// HOW TO FIND THE MISSING ELEMENT OF AN ARRAY

//_____________Method 1:- using sum of N-numbers_____________

// function missingElement(arr){
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     let SumNum = 0
//     let SumArr = 0
//     for(let i=min; i<=max; i++ ){
//         SumNum += i;
//     }

//     for(let num of arr){
//         SumArr += num;
//     }

//     return SumNum-SumArr;
// }

// let arr = [1,2,3,4,6]
// let missing = missingElement(arr);
// console.log("The missing element is: ", missing);


//___________Method 2:- using XOR_______________

function missingElement(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let XOR1 = 0
    let XOR2 = 0
    for(let i=min; i<=max; i++ ){
        XOR1 ^= i;
    }

    for(let num of arr){
        XOR2 ^= num;
    }

    return XOR1^XOR2;
}

let arr = [1,2,3,4,6]
let missing = missingElement(arr);
console.log("The missing element is: ", missing);