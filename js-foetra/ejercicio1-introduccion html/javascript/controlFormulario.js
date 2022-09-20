// console.log("controlFormulario.js funciona");
const valores = window.location.search;

//Mostramos los valores en consola:
console.log(valores);

var campoNombre = false;
var campoTelefono=false;
var campoCorreo=false;
var campoCampo=false;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var nombre = urlParams.get('nombre');
var telefono = urlParams.get('telefono');
var correo = urlParams.get('correo');
var campo = urlParams.get('campo');
console.log(nombre);
console.log(telefono);
console.log(correo);
console.log(campo);

if (nombre != null && telefono != null && correo != null && campo != null) {
    alert("los campos han sido completados correctamente se ejecutara el codigo");
} else {
    alert("los campos no han sido completados correctamente");
}


for(let [index, valor] of arraPaises.entries()) {
    var pais = new Option(valor, index);
    modelList.options.add(pais);
}

function validateFormContacto() {
    let nombre = document.getElementById("nombre");
    // console.log(nombre);
    // console.log(nombre.value.length);
    if(nombre.value.length > 2) {
        // Si el tamaño del nombre es correcto
        campoNombre = true;
        document.getElementById("nombre").classList.remove("error");
        validarFormulario();
    } else {
        // el tamaño de nombre es falso
        campoNombre = false;
        document.getElementById("nombre").classList.add("error");
        validarFormulario();
    }
}

function validateFormContactoTelefono() {
    let nombre = document.getElementById("telefono");
    if(nombre.value >= 1000000000 && nombre.value <= 9999999999) {
        campoTelefono = true;
        document.getElementById("telefono").classList.remove("error");
        validarFormulario();
    } else {
        campoTelefono = false;
        document.getElementById("telefono").classList.add("error");
        validarFormulario();
    }
}

function validateFormContactoEmail() {
    let nombre = document.getElementById("correo");
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(nombre.value)) {
        campoCorreo = true;
        document.getElementById("correo").classList.remove("error");
        validarFormulario();
    } else {
        campoCorreo = false;
        document.getElementById("correo").classList.add("error");
        validarFormulario();
    }
}

function validateFormContactoCampo() {
    let nombre = document.getElementById("campo");
    if(nombre.value.length > 2) {
        campoCampo = true;
        document.getElementById("campo").classList.remove("error");
        validarFormulario();
    } else {
        campoCampo = false;
        document.getElementById("campo").classList.add("error");
        validarFormulario();
    }
}

function validarFormulario() {
    if(campoNombre && campoCampo && campoTelefono && campoCorreo) {
        document.getElementById("botonSubmit").removeAttribute("disabled");
        // buscamos en el DOM el boton del formulario y lo habilitamos
    } else {
        document.getElementById("botonSubmit").setAttribute("disabled","disabled");
        // buscamos en el DOM el boton del formulario y lo habilitamos
    }
}