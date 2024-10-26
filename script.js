function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualizar la hora al cargar la página
updateClock();

// Actualizar la hora cada segundo
setInterval(updateClock, 1000);

// Actualizar la hora al hacer clic en el botón
document.getElementById('updateTime').addEventListener('click', updateClock);
