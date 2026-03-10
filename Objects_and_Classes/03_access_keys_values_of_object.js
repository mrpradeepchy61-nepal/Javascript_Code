

const employee = {
    fullName : "Rahul Kumar",
    age : 23,
    job : "Engineering",
    salary : 1000000
}

// Access only keys
console.log(Object.keys(employee));

// Access value 
console.log(Object.values(employee));

// Access both keys and values 
console.log(Object.entries(employee))

// Assign properties of pre-existing object to new onjects
let result = Object.assign({}, employee);
console.log(result);

