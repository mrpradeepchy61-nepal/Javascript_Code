// TO PRINT ALL DUPLICATES CHARACTERS OF A STRING

let str = "pradeep"

for(let i=0; i<str.length; i++){
    if(str.indexOf(str[i]) !== str.lastIndexOf(str[i]) && str.indexOf(str[i])=== i){
        console.log(str[i]);
    }
}