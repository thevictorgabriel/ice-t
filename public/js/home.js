// public/js/home.js
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    const btnLogin = document.getElementById('btnlogin');
    const btnSolicitarManutencao = document.getElementById('btnSolicitarManutencao');

    if (token) {
        btnLogin.textContent = 'Logout';
        btnLogin.addEventListener('click', () => {
            localStorage.removeItem('token');
            window.location.href = '/login';
        });

        btnSolicitarManutencao.addEventListener('click', () => {
            window.location.href = '/manutencao-corretiva';
        });
    } else {
        btnLogin.textContent = 'Login';
        btnLogin.addEventListener('click', () => {
            window.location.href = '/login';
        });

        btnSolicitarManutencao.addEventListener('click', () => {
            //alert('Por favor, faça login para solicitar manutenção.');
            window.location.href = '/manutencao-corretiva';
        });
    }
});
