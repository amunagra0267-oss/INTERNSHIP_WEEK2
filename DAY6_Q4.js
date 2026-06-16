function processStudent(student, callback) {
    callback(student);
}

function printStudent(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
}

processStudent(
    { name: "Ram", age: 20 },
    printStudent
);