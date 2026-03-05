let num = parseInt(prompt("Enter a number: "))

let org = num;

let rev = 0;

while(num>0){
    let temp = num%10
    rev = rev*10 + temp
    num = Math.floor(num/10);
}

if(rev === org){
    console.log(org + " is palindrome")
}
else{
    console.log(org + " is not a palindrome")
}