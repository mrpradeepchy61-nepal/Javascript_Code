let num = parseInt(prompt("Enter a number: "))

for(let i=1; i<=num; i++){
    let prime = true
    for(let j=2; j<i; j++){
        if(i%j==0){
            prime = false
            break;
        }
    }
    if(prime){
        console.log(i )
    }
}