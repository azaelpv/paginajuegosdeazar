function lanzarDados() {
  // Generar un número aleatorio entre 1 y 6 para cada dado
  var dado1 = Math.floor(Math.random() * 6) + 1;
  var dado2 = Math.floor(Math.random() * 6) + 1;

  // Obtener las imágenes de los dados
  var imagenDado1 = document.getElementById("dado1");
  var imagenDado2 = document.getElementById("dado2");

  // Establecer las rutas de las imágenes de los dados
  imagenDado1.src = "dado" + dado1 + ".png";
  imagenDado2.src = "dado" + dado2 + ".png";

  // Crear una cadena con el resultado
  var resultado = "Resultado: Jugador 1 = " + dado1 + ", Jugador 2 = " + dado2;

  // Mostrar el resultado en la página
  var resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = resultado;

  // Determinar el ganador
  var ganadorElemento = document.getElementById("ganador");
  if (dado1 > dado2) {
    ganadorElemento.innerHTML = "¡Jugador 1 gana!";
  } else if (dado1 < dado2) {
    ganadorElemento.innerHTML = "¡Jugador 2 gana!";
  } else {
    ganadorElemento.innerHTML = "¡Empate!";
  }
}
