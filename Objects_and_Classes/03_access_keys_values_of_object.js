//  Access all keys of an object

const employee = {
    fullName : "Rahul Kumar",
    age : 23,
    job : "Engineering",
    salary : 1000000
}

console.log(Object.keys(employee));

// Access value 

console.log(Object.values(employee));

// Access both keys and values 

console.log(Object.entries(employee))
