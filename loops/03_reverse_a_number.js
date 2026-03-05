let num = parseInt(prompt("Enter a number: "))
let temp, rev=0;

while(num>0){
    temp = num%10;
    rev = rev*10 + temp;
    num = Math.floor(num/10);
}

console.log("Reversed number is: ", rev)