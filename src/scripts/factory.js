const createHTML = (name, department, computer) => {
    return `
    <article class="employee">
        <header class="employee__name">
        <h1>${name}</h1>
        </header>
        <section class="employee__department">
        Works in the ${department} department
        </section>
        <section class="employee__computer">
        Currently using a ${computer}
        </section>
    </article>
  `
}

export default createHTML