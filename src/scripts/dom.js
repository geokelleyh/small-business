const smallBusinessContainer = document.getElementById("#small-businesss-container")

const renderToDom = (HTMLString) => {
    smallBusinessContainer.innerHTML += HTMLString
}

export default renderToDom