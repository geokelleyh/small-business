
import API from "./api.js"
import createHTML from "./factory.js";
import renderToDom from "./dom.js";

const message = "Employees List with Departments and Computer Assignments"

document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

API.getData()
.then(employees => {
    employees.forEach(employee => {
        const name = employee.name
        const department = employee.department.departName
        const computer = employee.computer.model
        const HTMLRepresentation = createtHTML(name, department, computer)
        renderToDom(HTMLRepresentation)
    })
})
