// let myArr = [1,2,3,4,5];
// console.log(myArr);

//Methods in JS

// myArr.push(6);  // Add garxa
// console.log(myArr);

// myArr.pop()  // Removes last value of an array
// console.log(myArr);


// myArr.unshift(7);  // 0 index ma value add garxa array ko
// console.log(myArr);

// myArr.shift()   // 0 index ma vako value lai remove garxa
// console.log(myArr);


//inbuilt functions

// console.log(myArr.includes(2)); //returns tru or false of it exists in an array
// console.log(myArr.indexOf(4));  //element to index show garxa


// let newArray = myArr.join()  //array lai join sangai string ma convert gardinxa
// console.log(newArray);


// slice and splice

let A1 = [0,1,2,3,4]
console.log("A ", A1);

let newA1 = A1.slice(1,3)
console.log(newA1);
console.log("B ",A1);


let newA2 = A1.splice(1,3); // splice le last index lai ta includes garxa but actual array batw tyo values lai remove gardinxa
console.log(newA2);
console.log("C ", A1);