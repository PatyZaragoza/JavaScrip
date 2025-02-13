const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("btn-saludo");



 const eventoSaludar = () =>{
    let textoMensaje = "Hola desde js con DOM";
    mensaje.innerText = textoMensaje;
    // mensaje.innText += textoMensaje; es para agregar una lista o registro 
 }

 boton.addEventListener("click", eventoSaludar);


