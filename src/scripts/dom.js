
smallBusinessContainer = document.querySelector("#small-business-container")
const renderToDom = (HTMLRepresentation) => {
 
    smallBusinessContainer.innerHTML += HTMLRepresentation
}
export default renderToDom