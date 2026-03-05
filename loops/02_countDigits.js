let num = parseInt(prompt("Enter a number: "));
let count = 0;

while(num>0){
    let digit = num%10;
    count += 1;
    num = Math.floor(num/10);
}
console.log("Total digits is: ", count);