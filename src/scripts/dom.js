
const smallBusinessContainer = document.querySelector("#small-businesss-container")
const renderToDom = (HTMLString) => {
    
    smallBusinessContainer.innerHTML += HTMLString
}

export default renderToDom