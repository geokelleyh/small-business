<<<<<<< HEAD
const smallBusinessContainer = document.getElementById("#small-businesss-container")
=======
const businessContainer = document.querySelector("#container")
>>>>>>> small-business-branch

const renderToDom = (HTMLString) => {
    businessContainer.innerHTML += HTMLString
}

export default renderToDom