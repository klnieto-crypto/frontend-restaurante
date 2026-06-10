// karen: [Funciones globales]

function cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '../index.html';
}

function mostrarToast(msg, tipo = 'ok') {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = `toast ${tipo}`;
    setTimeout(() => t.classList.add('hidden'), 3000);
}

function verificarSesion() {
    const token = localStorage.getItem('token');
    if (!token) window.location.href = '../index.html';
    return token;
}