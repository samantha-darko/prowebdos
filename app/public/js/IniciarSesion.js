let mostrar = document.querySelector("#mostrar");
let ocultar = document.querySelector("#ocultar");
let user = document.querySelector("#txtUser")
let contra = document.querySelector("#txtPass")

$(document).ready(function () {
    mostrar.addEventListener("click", function (e) {
        e.preventDefault()
        contra.type = "text"
        mostrar.style.display = "none"
        ocultar.style.display = "block"
    })
    ocultar.addEventListener("click", function (e) {
        e.preventDefault()
        contra.type = "password"
        mostrar.style.display = "block"
        ocultar.style.display = "none"
    })
})