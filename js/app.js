class UI {
    /* static alerta(mensaje, classname) {
         const div = document.createElement('div');
         div.className = `alerta alerta-${classname}`;
         div.appendChild(document.createTextNode(mensaje));

         const contenedor = document.querySelector('#titulos');
         const form = document.querySelector('#inputs-rg');
         contenedor.insertBefore(div, form);
     }*/
    limpiar() {
        let user = (document.getElementById("usuario").value = "");
        let email = (document.getElementById("correo").value = "");
        let pass = (document.getElementById("key").value = "");
    }
    pasarPagina() {
        window.location.href("principal-got.html");
    }
}


function registroUsuarios() {
    let user = document.getElementById("usuario").value;
    let email = document.getElementById("correo").value;
    let pass = document.getElementById("key").value;
    console.log(user, email, pass);
    if (user == "" || email == "" || pass == "") {
        alert("Por favor ingrese todos los campos.")
    } else {
        localStorage.setItem("usuario", user)
        localStorage.setItem("email", email)
        localStorage.setItem("pass", pass)

        alert("Se ha creado su cuenta con el nombre: " + user)
        UI.limpiar();
        pasarPagina();
    }
}

function obtenerDatos() {
    let usuario = localStorage.getItem("usuario");
    console.log(usuario);
    return usuario;
}


window.addEventListener("load", function(event) {
    this.localStorage.clear;
    let usuario = obtenerDatos();
    if (usuario === "" || usuario === null) {
        document.getElementById('usuariopage').innerHTML = "Sin cuenta";
    } else {
        document.getElementById('usuariopage').innerHTML = usuario;
    }
});


fetch(
        "https://gameofthrones-10de7-default-rtdb.firebaseio.com/gameofthrones.json"
    )
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        let contenedor = document.querySelector(".card");
        datos.forEach((personaje) => {
            contenedor.innerHTML += `
            <div class="card__perfil">
            <div class="card__nombre">
                <img src="${personaje.photo}" alt="" srcset="">
                <h2>${personaje.nombre}</h2>
            </div>
            <hr>
            <div class="card__descripcion">
                <p>${personaje.informacion}</p>
            </div>
            <div>
            <p>Me considero ${personaje.nombre}<p>
                <a class="button" href="#">Soy yo<span class="material-icons icons-vertical ">chevron_right</span></a>
            </div>
            
        </div>`;
        });
    });