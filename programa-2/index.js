
// Agregar evento para cuando este completo el DOM, DOM es la conversion de HTML a javaScript
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("calculadora");

    const eventoFormulario = evt => {
        evt.preventDefault(); 

        // TODO: sumar los números
        const num1 = parseFloat(formulario.numero1.value);
        const num2 = parseFloat(formulario.numero2.value);
        const suma = num1 + num2;

        // TODO: mostrar los resultados de la suma
        let resultado = document.getElementById("resultado");
        if (!resultado) {
            resultado = document.createElement("p");
            resultado.id = "resultado";
            formulario.appendChild(resultado);
        }
        resultado.textContent = `Resultado: ${suma}`;
    };

    // TODO: agregar evento para cuando esté completo el DOM
    formulario.addEventListener("submit", eventoFormulario);
});
