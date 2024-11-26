// public/js/auth.js
document.getElementById('entrar').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        const response = await axios.post('/auth/login', { email, senha });
        //localStorage.setItem('token', response.data.token);
        alert(response.data.message);
        window.location.href = '/'; //Caminho se der certo o login
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert(error.response.data.error || 'Erro ao fazer login.');
    }
});

// Redireciona para cadastro
document.getElementById('criar-conta').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/cadastro';
});

// Recuperação de senha
document.getElementById('esqueceu-senha').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = prompt('Digite seu email para recuperação de senha:');
    if (!email) {
        alert('Email é necessário para recuperação de senha.');
        return;
    }

    try {
        const response = await axios.post('/auth/forgot-password', { email });
        alert(response.data.message);
    } catch (error) {
        console.error('Erro ao recuperar senha:', error);
        alert(error.response.data.error || 'Erro ao recuperar senha.');
    }
});
