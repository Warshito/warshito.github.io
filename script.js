const boton = document.getElementById('miBoton');
const texto = document.getElementById('textoUsuario');
const resultadoDiv = document.getElementById('resultado');

boton.addEventListener('click', function() {
    const textUser = texto.value;

    resultadoDiv.innerHTML = `Has puesto ${textUser}`
});