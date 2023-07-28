const boton = document.getElementById('miBoton');
const texto = document.getElementById('textoUsuario');
const resultadoDiv = document.getElementById('resultado');

const boton2 = document.getElementById('miBoton2');

boton.addEventListener('click', function() {
    const textUser = texto.value;

    resultadoDiv.innerHTML = `/team add ${textUser}`
});

boton2.addEventListener('click', function() {
    const checkbx = document.querySelectorAll('input[type="checkbox"]:checked')
    const selectedOptions = Array.from(checkbx).map(checkbox => checkbox.value);
    alert('Seleccionaste: ' + selectedOptions.join(', '));
});