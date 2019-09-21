
import API from "./api.js"
import createHTML from "./factory.js"
import renderToDom from "./dom.js"

const message = "Employees List with Departments and Computer Assignments"
console.log(message)
document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

<<<<<<< HEAD
API.getData()
.then(employees => {
    employees.forEach(employee => {
        const name = employee.name
        console.log(name)
        const department = employee.department.deptName
        const computer = employee.computer.model
        console.log(name,department,computer)
        const HTMLRepresentation = createHTML(name, department, computer)
        renderToDom(HTMLRepresentation)
=======
API.getInfo()
    .then(employees =>{
        console.log(employees)
        employees.forEach (employee =>{
            console.log(employee)
            const name = employee.name
            console.log("what is",employee.department.deptName)
            const department = employee.department.deptName
            console.log("department =",department)
            const computer = employee.computer.model
            console.log(computer)
            console.log(name, department, computer)
           const HTMLRepresentation = createHTML(name, department, computer)
            console.log(HTMLRepresentation)
            renderToDom(HTMLRepresentation)
        })
>>>>>>> small-business-branch
    })
