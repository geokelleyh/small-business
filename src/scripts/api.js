const API = {
    getData() {
        return fetch("http://localhost:8088/departments?_embed=computers&_embed=employees")
            .then(response => response.json())
    }
}

export default API