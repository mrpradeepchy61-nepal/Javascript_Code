let num = parseInt(prompt("Enter a number: "))
let digitSum = 0;

while(num>0){
    let temp = num%10;
    digitSum += temp;
    num = Math.floor(num/10);
}

console.log("Sum of Digits is: ", digitSum);