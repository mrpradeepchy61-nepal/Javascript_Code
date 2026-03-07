// TO PRINT FIRST NON-REPEATED CHARACTER IN A STRING

let str = "abacsd"
for(let ch of str){
    if(str.indexOf(ch) == str.lastIndexOf(ch)){
        console.log(ch);
        break;
    }
}