const businessContainer = document.querySelector("#container")

const renderToDom = (HTMLString) => {
    businessContainer.innerHTML += HTMLString
}

export default renderToDom