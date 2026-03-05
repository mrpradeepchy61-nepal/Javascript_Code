let str1 = "Earth"
let str2 = "Heart"

if(str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')){
    console.log("Anagrams")
}
else{
    console.log("Not Anagrams")
}