function translate(){
var title = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remember = document.getElementsByTagName("span")[0];
var button = document.getElementsByClassName("btn")[0];

title.innerHTML = "Por favor inicia sesion";
email.placeholder = "Correo Electrónico";
password.placeholder = "Contraseña";
remember.innerHTML = "Recordar Datos";
button.innerHTML = "Inicia Sesion";

}

translate();


function mostrar (){
    var correoElectronico = document.getElementById("inputEmail").value;
    var contraseña = document.getElementById("inputPassword").value;
    var datosDelFormulario = document.getElementById("datosDelFormulario");
    var resultado = document.getElementById("resultado");
    datosDelFormulario.innerHTML = "Datos del Formulario";
    resultado.innerHTML = "<u>Correo electrónico ingresado: </u><br>" + correoElectronico + "<u><br> Esta es tu clave:</u></br>" + contraseña;  
}





 