function operacion() {
  let sum = 0;

  for (let i = 1; i <= 11; i++) {
    const valor = Number(document.getElementById(`valor${i}`).value);
    if (!isNaN(valor)) {
      sum += valor;
    }
  }

  const result1 = sum.toFixed(2);
  document.getElementById('result1').value = `$${result1}`;
}



function actualizarHora() {
  const reloj = document.getElementById("reloj");
  const fecha = new Date();
  const hora = fecha.getHours().toString().padStart(2, '0');
  const minutos = fecha.getMinutes().toString().padStart(2, '0');
  const segundos = fecha.getSeconds().toString().padStart(2, '0');

  const horaActual = `${hora}:${minutos}:${segundos}`;
  reloj.textContent = horaActual;
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);

// Llamar a la función para mostrar la hora actual inmediatamente
actualizarHora();