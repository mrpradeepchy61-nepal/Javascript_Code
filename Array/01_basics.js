let boys_name = ["Pradeep", "Bharat", "Bipin"];
let girls_name = ["Punam", "Rashmi", "Shiva"];

// boys_name.push(girls_name);   // pura array lai nai insert gardiyo as a nested array
// console.log(boys_name);

//.............(concat operator).........
// boys_girls = boys_name.concat(girls_name);  // elements lai single array ma insert gardiyo
// console.log(boys_girls);


// (spread ... operator)  //
let names = [...boys_name, ...girls_name]
console.log(names);

console.log(Array.isArray("Pradeep"));

console.log(Array.from("Pradeep"));   // .from array ma convert garxa



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))




