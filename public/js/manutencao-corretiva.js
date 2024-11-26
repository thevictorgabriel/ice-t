document.getElementById('btnSolicitarManutenção').addEventListener('click', async () => {
    const descricao = document.getElementById('descricao').value;
    const equipamento = document.getElementById('equipamento').value;
    const numeroSala = document.getElementById('numeroSala').value;
    const bloco = document.getElementById('bloco').value;

    
    if (descricao && solicitante && equipamento) {
        try {
            await axios.post('http://localhost:4000/manutencao-corretiva/add', {
                descricao,
                equipamento,
                numeroSala,
                bloco
            });
            alert('Solicitação enviada com sucesso!');
            carregarManutencoes();
        } catch (error) {
            console.error(error);
            alert('Erro ao enviar solicitação.');
        }
    }
});

async function carregarManutencoes() {
    try {
        const response = await axios.get('http://localhost:4000/manutencao-corretiva/all');
        const lista = document.getElementById('list');
        lista.innerHTML = '';
        response.data.forEach((manutencao) => {
            const li = document.createElement('li');
            li.textContent = `Bloco: ${manutencao.bloco}, Descrição: ${manutencao.descricao}`;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error(error);
    }
}

// Carrega as manutenções ao carregar a página
window.onload = carregarManutencoes;
