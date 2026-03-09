// --------------- creating an object-----------

const Student = {
    fullName: "Pradeep Chaudhary",
    marks : 96,
    printMarks : function (){
        console.log("marks = ", this.marks);
    },
}

// console.log(Student.fullName)
// console.log(Student.marks)
console.log(Student.printMarks())

//----------------------------------------------