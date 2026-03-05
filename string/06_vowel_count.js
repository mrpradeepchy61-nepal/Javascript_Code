let str = "Hello pradeep! Are you enjoying Javascript?"

const vowels = "aeiouAEIOU"
let count = 0;

for(let ch of str){
    if(vowels.includes(ch)){
        count++;
    }
    
}

console.log(count)