const createHTML = (name, department, computer) => {
    return `
    <article class="employee">
        <header class="employee__name">
<<<<<<< HEAD
        <h1>${employees.name}</h1>
=======
        <h1>${name}</h1>
>>>>>>> small-business-branch
        </header>
        <section class="employee__department">
        Works in the ${deptName} department
        </section>
        <section class="employee__computer">
<<<<<<< HEAD
        Currently using a  ${computer}
=======
        Currently using a ${computer}
>>>>>>> small-business-branch
        </section>
    </article>
  `
}

export default createHTML