
import API from "./api.js"
import createHTML from "./factory.js";
import renderToDom from "./dom.js";

const message = "Employees List with Departments and Computer Assignments"

document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

API.getInfo()
.then(employees => {
    employees.forEach(employee => {
        console.log(employee)
        const name = employee.name
        console.log(name)
        const department = employee.department.deptName
        console.log(department)
        const computer = employee.computer.model
        console.log(computer)
        let HTMLRepresentation = createHTML(name, department, computer)
        renderToDom(HTMLRepresentation)
    })
})
