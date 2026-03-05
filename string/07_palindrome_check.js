let str = "madam";
let rev_str = str.split('').reverse().join('')

if(str === rev_str){
    console.log(str, " is palindrome")
}
else {
    console.log(str, " is not palindrome")
}