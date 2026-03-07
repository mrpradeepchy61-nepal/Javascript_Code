// TO COUNT OCCURANCE OF A GIVEN CHARACTER IN A STRING

function countOccurance(str,ch){
    let count = 0;
    for(let char of str){
        if(char === ch){
            count++;
        }
    }
    return count;
}




let str = "javascript programming"
let ch = "a"
let result = countOccurance(str,ch);
console.log(`The occurance of ${ch} in "${str}" is ${result}`);