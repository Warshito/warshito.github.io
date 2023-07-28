const boton = document.getElementById('miBoton');
const texto = document.getElementById('textoUsuario');
const resultadoDiv = document.getElementById('resultado');

boton.addEventListener('click', function() {
    const textUser = texto.value;

    resultadoDiv.innerHTML = `You entered: ${textUser}`
});
