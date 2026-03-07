let str = "pradeep"

for(let ch of str){
    if(str.indexOf(ch) == str.lastIndexOf(ch)){
        console.log("Non repeated characters are: ", ch);
    }
}