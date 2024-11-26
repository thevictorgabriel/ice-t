// public/js/cadastro.js
document.getElementById('cadastrar').addEventListener('click', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    if (!nome || !email || !cpf || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        const response = await axios.post('/auth/register', { nome, email, cpf, senha });
        alert(response.data.message);
        window.location.href = '/login';
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        alert(error.response.data.error || 'Erro ao cadastrar usuário.');
    }
});
