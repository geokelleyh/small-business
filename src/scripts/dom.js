
smallBusinessContainer = document.querySelector("#business-container")
const renderToDom = (HTMLRepresentation) => {
 return
    smallBusinessContainer.innerHTML += HTMLRepresentation
}
export default renderToDom