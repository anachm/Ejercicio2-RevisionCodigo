var $formulario = document.querySelector(".formulario");
  
  var $nombreForm = $formulario.elements[0];
  var $edadForm = $formulario.elements[1];
  var $nacionalidadForm = $formulario.elements[2];

$formulario.onsubmit = function(e) {
e.preventDefault();

  var nombre = $nombreForm.value;
  var edad = $edadForm.value;
  var i = $nacionalidadForm.selectedIndex;
  var nacionalidad = $nacionalidadForm.options[i].value;

  if (nombre.length === 0) {
    $nombreForm.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    $edadForm.classList.add("error");
  }

if (nombre.length > 0 && edad > 18 && edad < 120) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
};

// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

crearElemento("Nombre", nombre, elementoLista);
crearElemento("Edad", edad, elementoLista);
crearElemento("Nacionalidad", nacionalidad, elementoLista);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  };

$nombreForm.value = ''
$edadForm.value = '';
$nacionalidadForm.value = '';
}

function crearElemento(descripcion, valor, elementoLista) {
let invitado = document.createElement('p');
invitado.innerHTML = `${descripcion}: ${valor}`;
console.log(invitado)
elementoLista.appendChild(invitado);
}