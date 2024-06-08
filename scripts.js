let carrinho = [];

function adicionarAoCarrinho(item, preco) {
    carrinho.push({ item, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';
    let total = 0;
    carrinho.forEach(({ item, preco }, index) => {
        const li = document.createElement('li');
        li.textContent = `${item} - R$ ${preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);

        const removerButton = document.createElement('button');
        removerButton.textContent = 'Remover';
        removerButton.onclick = () => removerItemDoCarrinho(index);
        li.appendChild(removerButton);

        total += preco;
    });
    document.getElementById('total-carrinho').textContent = total.toFixed(2);
}

function removerItemDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function retirarTudoDoCarrinho() {
    carrinho = [];
    atualizarCarrinho();
}

function comprar() {
    const nomeInput = document.querySelector('.nomedocliente');
    const nome = nomeInput.value.trim();

    if (nome.length === 0) {
        nomeInput.classList.add('error');
        alert('Por favor, insira seu nome.');
        return;
    } else {
        nomeInput.classList.remove('error');
    }

    if (carrinho.length === 0) {
        alert('O carrinho está vazio. Adicione ao menos um item para comprar.');
        return;
    }

    const itens = carrinho.map(({ item }) => item).join(', '); // Obter uma lista dos itens do carrinho
    console.log(nome + ', ' + itens);

    const total = parseFloat(document.getElementById('total-carrinho').textContent);
    document.getElementById('valor-carrinho-overlay').textContent = total.toFixed(2);

    document.getElementById('overlay').style.display = 'flex';
}

function atualizar() {
    location.assign(location.href);
}