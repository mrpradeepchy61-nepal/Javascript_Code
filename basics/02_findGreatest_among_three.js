let num1 = parseInt(prompt("Enter a first number: "))
let num2 = parseInt(prompt("Enter a second number: "))
let num3 = parseInt(prompt("Enter a third number: "))

if(num1>num2 && num1>num3){
    console.log(num1, " is greatest")
}
else if(num2>num1 && num2>num3){
    console.log(num2, " is greatest")
}
else{
    console.log(num3, " is greatest")
}