document.addEventListener('DOMContentLoaded', function () {
// Obtén una referencia al botón por su ID
const placeButton = document.getElementById("place");
const contenidoDesplegable = document.getElementById("contenidoDesplegable");

placeButton.addEventListener("click", function() {
  // Verifica si el atributo aria-expanded es "false"
  if (placeButton.getAttribute("aria-expanded") === "false") {
    // Cambia el valor del atributo aria-expanded a "true"
    placeButton.setAttribute("aria-expanded", "true");
    // Muestra el contenido desplegable
    contenidoDesplegable.style.display = "block";
  } else {
    // Cambia el valor del atributo aria-expanded a "false"
    placeButton.setAttribute("aria-expanded", "false");
    // Oculta el contenido desplegable
    contenidoDesplegable.style.display = "none";
  }
});
    
    
    
    
    
    document.getElementById("opciones").addEventListener("click", function () {
    const opcionesDesplegadas = document.getElementById("opcionesDesplegadas");
    if (opcionesDesplegadas.style.display === "block") {
        opcionesDesplegadas.style.display = "none";
    } else {
        opcionesDesplegadas.style.display = "block";
    }
});



});