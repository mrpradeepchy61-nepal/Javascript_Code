const student = {
    firstName : "Pradeep",
    lastName : "Chaudhary",
    id : 1293,
    course : "Btech",
    country : "Nepal"
}

console.log(student.firstName + " " + student.lastName)
console.log(student.id)
console.log(student.course)

//----------METHODS OF AN OBJECT--------

//to delete key and value
delete student.id
console.log(student)

//TO UPDATE KEY OF AN OBJECT
student.course = "CSE"
console.log(student.course)

//TO ADD NEW KEY VALUE PAIR IN AN OBJECT
student.year = 2026
console.log(student.year)


console.log(student)
