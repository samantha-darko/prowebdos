let mostrar = document.querySelector("#mostrar");
let ocultar = document.querySelector("#ocultar");

let register = document.querySelector("#register")

function validarCorreo(correo, correovacio, errorcorreo) {
    var regCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var error = false;
    var email = correo.value;

    if (correo.value.length < 1) {
        correovacio.style.display = "block";
        error = true;
    } else {
        correovacio.style.display = "none";
        if (!regCorreo.test(email)) {
            correo.style.borderColor = '#FF331F'
            errorcorreo.style.display = "block";
            error = true;
        } else {
            errorcorreo.style.display = "none";
            error = false;
        }
    }
    return error;
}

function validarNombre(nombre, idvacio) {
    var error = false;

    if (nombre.value.length < 1) {
        idvacio.style.display = "block";
        error = true;
    } else {
        idvacio.style.display = "none";
    }
    return error;
}

function validarPassword(password) {

    var error = false;

    if (password.value.length < 1) {
        error = true;
        vaciocontra.style.display = "block"
    } else {
        vaciocontra.style.display = "none"
    }

    if (!error) {
        var minimocar = false;
        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter_raro = false;

        if (password.value.length > 7) {
            minimocar = true;
        }

        for (var i = 0; i < password.value.length; i++) {
            if (password.value.charCodeAt(i) >= 65 && password.value.charCodeAt(i) <= 90) {
                mayuscula = true;
            }
            if (password.value.charCodeAt(i) >= 97 && password.value.charCodeAt(i) <= 122) {
                minuscula = true;

            }
            if (password.value.charCodeAt(i) >= 48 && password.value.charCodeAt(i) <= 57) {
                numero = true;
            }
            if ((password.value.charCodeAt(i) >= 35 && password.value.charCodeAt(i) <= 38)
                || password.value.charCodeAt(i) == 33 || password.value.charCodeAt(i) == 42
                || password.value.charCodeAt(i) == 43 || password.value.charCodeAt(i) == 46
                || password.value.charCodeAt(i) == 47) {
                caracter_raro = true;
            }
        }
        if (minimocar === true && mayuscula === true && minuscula === true && caracter_raro === true && numero === true) {
            errorletras.style.display = 'none';

        } else {
            errorletras.style.display = 'block';
            error = true;
        }
    }

    return error;
}

function validarUsuario(usuario, idvacio, iderror) {
    const user = usuario;
    const regUsuario = /^[a-zA-Z0-9]+$/;
    var error = false;

    if (user == 0) {
        document.getElementById(idvacio).style.display = "block"
        error = true;
    } else {
        document.getElementById(idvacio).style.display = "none"
        error = false;
    }

    if (!error) {
        if (user.length > 2 && !regUsuario.test(user)) {
            document.getElementById(iderror).style.display = "block"
            error = true;
        } else {
            document.getElementById(iderror).style.display = "none"
            error = false;
        }
    }

    return error;
}

function validarFecha(fecha, iderror, idvacio) {
    var error = false;

    if (fecha == "") {
        document.getElementById(idvacio).style.display = "block";
        error = true;
    } else {
        document.getElementById(idvacio).style.display = "none";
        const date1 = new Date(Date.now());
        const date2 = new Date(fecha);
        date2.setMinutes(date2.getMinutes() + date2.getTimezoneOffset());
        date1.setHours(0, 0, 0);
        date2.setHours(0, 0, 0);

        if (date1 < date2) {
            document.getElementById(iderror).style.display = "block";
            error = true;
        } else {
            document.getElementById(iderror).style.display = "none";
            error = false;
        }
    }

    return error;
}

function Usuario(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnopqrstuvwxyz1234567890.-_";
    especiales = "8-46";
    teclasEspeciales = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            teclasEspeciales = true; break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !teclasEspeciales) {
        return false;
    }
}

function Nombre(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46-164";
    teclasEspeciales = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            teclasEspeciales = true; break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !teclasEspeciales) {
        return false;
    }
}

function Correo(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = "abcdefghijklmnopqrstuvwxyz1234567890.-_@";
    especiales = "8-37-38-46-164";
    teclasEspeciales = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            teclasEspeciales = true; break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !teclasEspeciales) {
        return false;
    }
}

function Contra(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = "abcdefghijklmnopqrstuvwxyz1234567890ñ.#$%*/-_";
    especiales = "8-37-38-46-164";
    teclasEspeciales = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            teclasEspeciales = true; break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !teclasEspeciales) {
        return false;
    }
}

function Enfocar(objeto) {
    objeto.style.borderColor = 'blue'
    objeto.style.boxShadow = '0 1px 1px rgba(12, 22, 51, 0.075)inset, 0 0 8px rgba(7, 145, 230, 0.6)'
}

function Desenfocar(objeto, objeto2) {
    objeto.style.boxShadow = 'none'
    if (objeto.value.length > 0) {
        objeto.style.borderColor = 'gray'
        objeto2.style.display = 'none'
    } else {
        objeto.style.borderColor = '#FF331F'
        objeto2.style.display = 'block'
    }
}

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

    register.addEventListener("submit", function (e) {
        e.preventDefault()
        
    })
})