let contador = 1;

setInterval(function () {
  document.getElementById("slide" + contador).checked = true;
  contador++;

  if (contador > 10) {
    contador = 1;
  }
}, 14000);
