const createHTML = (name, department, computer) => {
    return `
    <article class="employee">
        <header class="employee__name">
        <h1>${employee.name}</h1>
        </header>
        <section class="employee__department">
        Works in the ${employee.department.deptName} department
        </section>
        <section class="employee__computer">
        Currently using a ${computer.model}
        </section>
    </article>
  `
}

export default createHTML