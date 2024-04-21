//################################## INÍCIO Funções Utilitárias ##################################

/**
 * Função utilitária para criação de elementos HTML.
 * @param {string} tag - A tag do elemento HTML.
 * @param {string} className - A classe do elemento HTML.
 * @param {string} innerHTML - O conteúdo interno do elemento HTML.
 * @returns {HTMLElement} - O elemento HTML criado.
 */
function createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

/**
 * Função utilitária para adicionar event listener a um elemento.
 * @param {HTMLElement} element - O elemento HTML ao qual o event listener será adicionado.
 * @param {string} event - O tipo de evento a ser ouvido.
 * @param {Function} callback - A função de retorno de chamada a ser executada quando o evento ocorrer.
 */
function adicionaEventListener(element, event, callback) {
    element.addEventListener(event, callback);
}

/**
 * Função utilitária para obter um elemento do DOM por seletor.
 * @param {string} selector - O seletor do elemento HTML.
 * @returns {HTMLElement} - O elemento HTML selecionado.
 */
function getElement(selector) {
    return document.querySelector(selector);
}

//- Funções de Atualização de Interface ----------------------------------------------------------------

/**
 * Função utilitária para atualizar a lista de itens no DOM.
 */
function updateItemList() {
    const listContainer = getElement('.list');
    listContainer.innerHTML = '';

    const page = state.page - 1;
    const start = page * state.quantidadePorPagina;
    const end = start + state.quantidadePorPagina;

    const paginateItems = products.slice(start, end);
    paginateItems.forEach(item => createProductCard(item, listContainer));
}

/**
 * Função utilitária para criar um item na lista no DOM.
 * @param {Object} product - O objeto representando o produto.
 * @param {HTMLElement} container - O contêiner onde o item será adicionado.
 */
function createProductCard(product, container) {
    //Templates em Strings:
    const card = `
        <div class="card border-0 col-4" style="width: 15rem; margin-bottom: 20px;">
            <img src="${product.image}" class="card-img-top bg-body-tertiary" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <div class="d-flex flex-column justify-content-center">
                    <p class="card-text fs-5">R$${product.preco}</p>
                    <p class="card-text mb-0">Volume: ${product.volume}</p>
                    <p class="card-text">Teor Alcoólico: ${product.alcoholPercentage}%</p>
                </div>
                <a href="#adicionar-ao-carrinho" class="btn btn-danger col-12" onclick="adicionarAoCarrinho(${product.id},'${product.image}', '${product.title}', ${product.preco})">Adicionar ao Carrinho</a>
            </div>
        </div>
    `;

    // Converter a string HTML em elementos DOM e anexá-los ao container
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = card;
    container.appendChild(tempDiv.firstElementChild);
}

/**
 *  Função para atualizar o Valor Total do carrinho
 */
function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product");
    let totalAmount = 0;

    // Itera sobre todos os produtos no carrinho
    for (let i = 0; i < cartProducts.length; i++) {
        // Obtém o preço do produto e a quantidade
        const productPrice = parseFloat(cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", "."));
        const productQuantity = parseFloat(cartProducts[i].getElementsByClassName("product-qtd-input")[0].value);

        // Calcula o valor total do produto multiplicando o preço pela quantidade e adicionando ao totalAmount
        totalAmount += productPrice * productQuantity;
    }

    // Formata o totalAmount para duas casas decimais e atualiza o texto exibido no DOM
    totalAmount = totalAmount.toFixed(2);
    totalAmount = totalAmount.replace(".", ",");
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount;
}

/**
 * Função utilitária para criação de elementos HTML.
 * @param {string} tag - A tag do elemento HTML.
 * @param {string} className - A classe do elemento HTML.
 * @param {string} innerHTML - O conteúdo interno do elemento HTML.
 * @returns {HTMLElement} - O elemento HTML criado.
 */
function createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

/**
 * Função utilitária para adicionar event listener a um elemento.
 * @param {HTMLElement} element - O elemento HTML ao qual o event listener será adicionado.
 * @param {string} event - O tipo de evento a ser ouvido.
 * @param {Function} callback - A função de retorno de chamada a ser executada quando o evento ocorrer.
 */
function adicionaEventListener(element, event, callback) {
    element.addEventListener(event, callback);
}

/**
 * Função utilitária para obter um elemento do DOM por seletor.
 * @param {string} selector - O seletor do elemento HTML.
 * @returns {HTMLElement} - O elemento HTML selecionado.
 */
function getElement(selector) {
    return document.querySelector(selector);
}

//================================== FIM funções Utilitárias ==================================
//################################## INÍCIO Dados dos Produtos ##################################

// Array com os dados dos produtos
/**
 * Cria um array com 100 elementos, onde cada elemento é uma string no formato 'Item N',
 * onde N é o índice mais 1.
 */

const products = [
    // Lista de objetos representando produtos com informações como ID, imagem, título, volume, percentual alcoólico e preço.
    { id: 1, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 2, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 3, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 4, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 5, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 6, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 7, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 8, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 9, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 10, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },

    { id: 11, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 12, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 13, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 14, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 15, image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 16, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 17, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 18, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 19, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 20, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },

    { id: 21, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 22, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 23, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 24, image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 25, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 26, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 27, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 28, image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 29, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 30, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },

    { id: 31, image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 32, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 33, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 34, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 35, image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 36, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 37, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 38, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 39, image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 40, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },

    { id: 41, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 42, image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 43, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 44, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 45, image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 46, image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 47, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 48, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 49, image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    { id: 50, image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11, preco: parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)) },
    // Adicione mais produtos conforme necessário
];
//================================== FIM Dados dos Produtos ==================================


//################################## 1. Inicialização ##################################

/**
 * Estado inicial da aplicação
 */
const state = {
    /**
     * Página atual.
     * @type {number}
     */
    page: 1,

    /**
     * Número de itens por página.
     * @type {number}
     */
    quantidadePorPagina: 9,

    /**
     * Total de páginas baseado no número de produtos e itens por página.
     * @type {number}
     */
    totalPage: Math.ceil(products.length / 9),

    /**
     * Número máximo de botões de página visíveis na paginação.
     * @type {number}
     */
    maxVisibleButtons: 3,
};

//================================== FIM Inicialização ==================================


//################################## 2. Controle de Navegação ##################################

/**
 * Objeto para controle de navegação.
 * Responsável por gerenciar a navegação entre páginas.
 * @type {Object}
 */
const navigation = {
    /**
      * Avança para a próxima página.
      * Incrementa a página atual e garante que não ultrapasse o limite total de páginas.
      */
    next() {
        state.page = Math.min(state.page + 1, state.totalPage);
    },
    /**
    * Retrocede para a página anterior.
    * Decrementa a página atual e garante que não seja menor que 1.
    */
    prev() {
        state.page = Math.max(state.page - 1, 1);
    },
    /**
     * Navega para uma página específica.
     * @param {number} page - O número da página para navegar.
     */
    goTo(page) {
        state.page = Math.max(1, Math.min(page, state.totalPage));
    },
};

/**
 * Objeto para controle dos botões de navegação.
 * Responsável pela criação e atualização dinâmica dos botões de navegação entre páginas.
 * @type {Object}
 */
const navigationButtons = {
    /** Elemento que contém os botões de navegação. */
    element: getElement('.controls .numbers'),

    /**
     * Cria um botão de navegação para uma página específica.
     * @param {number} number - O número da página para a qual criar o botão.
     * @returns {HTMLElement} - O elemento do botão criado.
     */
    createButton(number) {
        const button = createElement('a', 'page-link', number);

        // Adiciona a classe 'active' ao botão correspondente à página atual.
        if (state.page === number) {
            button.classList.add('active');
        }

        // Adiciona um event listener para a mudança de página quando o botão é clicado
        adicionaEventListener(button, 'click', () => {
            navigation.goTo(number);
            update();
        });

        // Adiciona o botão ao elemento de botões de navegação
        this.element.appendChild(button);
        return button;
    },

    /**
     * Atualiza os botões de navegação com base na página atual e no número máximo de botões visíveis.
     */
    updateButtons() {
        this.element.innerHTML = '';

        const { maxLeft, maxRight } = this.calculateMaxVisible();
        for (let page = maxLeft; page <= maxRight; page++) {
            this.createButton(page);
        }
    },

    /**
     * Calcula os números de página à esquerda e à direita do número da página atual, com base no número máximo de botões visíveis.
     * @returns {Object} - Um objeto contendo o número máximo de página à esquerda e à direita.
     */
    calculateMaxVisible() {
        const { maxVisibleButtons } = state;
        let maxLeft = Math.max(1, state.page - Math.floor(maxVisibleButtons / 2));
        let maxRight = Math.min(maxLeft + maxVisibleButtons - 1, state.totalPage);

        if (maxRight - maxLeft + 1 < maxVisibleButtons) {
            maxLeft = Math.max(1, maxRight - maxVisibleButtons + 1);
        }

        return { maxLeft, maxRight };
    },
};

/**
 * Calcula os números de página à esquerda e à direita do número da página atual, com base no número máximo de botões visíveis.
 * @returns {Object} Um objeto contendo os números da página máxima à esquerda e à direita.
 */
function calculateMaxVisible() {
    const { maxVisibleButtons } = state;
    let maxLeft = Math.max(1, state.page - Math.floor(maxVisibleButtons / 2));
    let maxRight = Math.min(maxLeft + maxVisibleButtons - 1, state.totalPage);

    if (maxRight - maxLeft + 1 < maxVisibleButtons) {
        maxLeft = Math.max(1, maxRight - maxVisibleButtons + 1);
    }

    return { maxLeft, maxRight };
}

/**
 * Atualiza tanto a lista quanto os botões de navegação na página.
 */
function update() {
    updateItemList();
    navigationButtons.updateButtons();
}

/**
 * Inicializa o controle de navegação e seus botões associados.
 * Adiciona event listeners aos botões de navegação para permitir a interação do usuário.
 */
function init() {
    update();

    // Adiciona event listeners aos botões de navegação
    adicionaEventListener(getElement('.first'), 'click', () => {
        navigation.goTo(1);
        update();
    });
    adicionaEventListener(getElement('.last'), 'click', () => {
        navigation.goTo(state.totalPage);
        update();
    });
    adicionaEventListener(getElement('.next'), 'click', () => {
        navigation.next();
        update();
    });
    adicionaEventListener(getElement('.prev'), 'click', () => {
        navigation.prev();
        update();
    });
}

// Chama a função de inicialização quando o documento é completamente carregado
window.addEventListener('load', init);

//==================================  FIM ontrole de Navegação  ==================================

//################################## 4. Manipulação do Carrinho ##################################

// Array para armazenar os itens no carrinho
let carrinho = [];
// Variável para armazenar o total do carrinho
let totalCarrinho = 0;

/**
 * Salva o carrinho no localStorage.
 */
function salvarCarrinhoNoLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

/**
 * Carrega o carrinho do localStorage, se existir.
 */
function carregarCarrinhoDoLocalStorage() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        // Atualiza o carrinho após carregar os itens salvos
        atualizarCarrinho();
    }
}

// Chama a função para carregar o carrinho do localStorage quando a página é carregada
window.addEventListener('load', carregarCarrinhoDoLocalStorage);

/// Definição do objeto Produto
class Produto {
    constructor(id, image, title, preco) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.preco = preco;
    }
}

/**
 * Adiciona um item ao carrinho de compras.
 * @param {Produto} produto - O objeto Produto a ser adicionado ao carrinho.
 */
function adicionarAoCarrinho(produto) {
    const itemExistente = carrinho.find(item => item.id === produto.id);

    if (itemExistente) {
        // Se o produto já está no carrinho, apenas atualize a quantidade
        itemExistente.quantidade += 1;
    } else {
        // Se o produto ainda não está no carrinho, adicione-o com quantidade 1
        const novoItemCarrinho = {
            id: produto.id,
            image: produto.image,
            title: produto.title,
            preco: produto.preco,
            quantidade: 1
        };
        carrinho.push(novoItemCarrinho);
        alert("Produto Adicionado ao Carrinho!!!");
    }

    totalCarrinho += produto.preco;

    // Atualiza o carrinho após a adição do item
    atualizarCarrinho();

    // Salva o carrinho no localStorage após a modificação
    salvarCarrinhoNoLocalStorage();
}

// Exemplo de uso da função adicionarAoCarrinho com um objeto Produto
const produto1 = new Produto(1, 'caminho/da/imagem1.jpg', 'Produto 1', 10.99);
adicionarAoCarrinho(produto1);


/**
 * Remove um item do carrinho de compras.
 * @param {number} index - O índice do item a ser removido.
 */
function removerDoCarrinho(index) {
    const itemRemovido = carrinho.splice(index, 1)[0];
    totalCarrinho -= itemRemovido.preco * itemRemovido.quantidade;

    // Atualiza o carrinho após a remoção do item
    atualizarCarrinho();

    // Salva o carrinho no localStorage após a modificação
    salvarCarrinhoNoLocalStorage();
}

/**
 * Atualiza a quantidade de um item no carrinho de compras.
 * @param {number} index - O índice do item a ser atualizado.
 * @param {number} novaQuantidade - A nova quantidade do item.
 */
function atualizarQuantidade(index, novaQuantidade) {
    const item = carrinho[index];

    // Atualiza a quantidade do item
    item.quantidade = parseInt(novaQuantidade, 10);

    // Calcula o novo total do carrinho
    totalCarrinho = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);

    // Atualiza o carrinho após a atualização da quantidade do item
    atualizarCarrinho();

    // Salva o carrinho no localStorage após a modificação
    salvarCarrinhoNoLocalStorage();
}

/**
 * Exibe ou oculta a seção total do carrinho com base no número de itens no carrinho.
 */
function exibirOcultarDivTotal() {
    const divTotal = document.getElementById('div-total');

    if (carrinho.length > 0) {
        divTotal.classList.remove('d-none');
    } else {
        divTotal.classList.add('d-none');
    }
}

/**
 * Função para renderizar a lista de carrinho na página.
 */
function renderizarListaCarrinho() {
    const listaCarrinhoSection = document.getElementById('lista-carrinho-section');
    listaCarrinhoSection.innerHTML = '';

    // Itera sobre os itens do carrinho e cria elementos HTML para cada um
    carrinho.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center px-0';

        const itemHTML = criarItemHTML(item, index);

        listItem.innerHTML = itemHTML;
        listaCarrinhoSection.appendChild(listItem);
    });
}

/**
 * Função para atualizar os totais exibidos na página.
 */
function atualizarTotais() {
    // Calcula o total do carrinho somando o preço de cada item multiplicado pela sua quantidade
    const totalCarrinho = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);

    // Atualiza os elementos no DOM com os totais calculados
    document.getElementById('total-produtos').textContent = `R$${totalCarrinho.toFixed(2)}`;
    document.getElementById('total-carrinho-section').textContent = `R$${totalCarrinho.toFixed(2)}`;
    document.getElementById('quantidade-de-produtos').textContent = `Produtos (${carrinho.reduce((total, item) => total + item.quantidade, 0)})`;
}

/**
 * Função principal para atualizar a exibição do carrinho na página.
 */
function atualizarCarrinho() {
    exibirOcultarDivTotal(); // Chama a função para exibir ou ocultar a div total
    renderizarListaCarrinho(); // Chama a função para renderizar a lista de carrinho
    atualizarTotais(); // Chama a função para atualizar os totais exibidos
}


/**
 * Cria o HTML para exibir um item no carrinho.
 * @param {Object} item - O item do carrinho.
 * @param {number} index - O índice do item no carrinho.
 * @returns {string} - O HTML para exibir o item no carrinho.
 */
function criarItemHTML(item, index) {
    return `
        <section class="row col-12 mx-auto pb-1">
            <article class="col-12 col-md-6 d-flex">
                <img src="${item.image}" class="img-thumbnail" alt="${item.title}" ">
                <div>
                    <span class="p-1 fs-5">${item.title}</span>
                    <div class="btn-carrinho">
                        <span>
                            <a href="javascript:void(0);" class="p-1"
                                onclick="removerDoCarrinho(${index})">Excluir</a>
                        </span>
                        <span>
                            <a href="javascript:void(0);" class="p-1">Salvar</a>
                        </span>
                        <span>
                            <a href="javascript:void(0);" class="p-1">Comprar</a>
                        </span>
                    </div>
                </div>
            </article>
            <div class="col-12 col-md-6 d-flex justify-content-between justify-content-md-end  mt-3 mt-lg-0">
                <div class="me-4">
                    <span>Quantidade:</span>
                    <input style="width: 50px;" type="number" min="1" value="${item.quantidade}"
                        onchange="atualizarQuantidade(${index}, this.value)">
                </div>
                <div>
                    <span>R$${(item.preco * item.quantidade).toFixed(2)}</span>
                </div>
            </div>
        </section>
    `;
}


/**
 * Função para atualizar os totais exibidos na página.
 */
function atualizarTotais() {
    // Calcula o total do carrinho somando o preço de cada item multiplicado pela sua quantidade
    const totalCarrinho = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);

    // Atualiza os elementos no DOM com os totais calculados
    document.getElementById('total-produtos').textContent = `R$${totalCarrinho.toFixed(2)}`;
    document.getElementById('total-carrinho-section').textContent = `R$${totalCarrinho.toFixed(2)}`;
    document.getElementById('quantidade-de-produtos').textContent = `Produtos (${carrinho.reduce((total, item) => total + item.quantidade, 0)})`;
}

/**
 * Função principal para atualizar a exibição do carrinho na página.
 */
function atualizarCarrinho() {
    exibirOcultarDivTotal(); // Chama a função para exibir ou ocultar a div total
    renderizarListaCarrinho(); // Chama a função para renderizar a lista de carrinho
    atualizarTotais(); // Chama a função para atualizar os totais exibidos
}

//================================== FIM Manipulação do Carrinho ==================================

//##################################  5. Exibição de Produtos ##################################

/**
 * Função para exibir produtos no offcanvas "Mais Vendidos".
 */
function exibirProdutosNoOffcanvasMaisVendidos() {
    const offcanvasBody = document.querySelector('#offcanvas-mais-vendidos .offcanvas-body');

    // Limpa o conteúdo atual do offcanvas
    offcanvasBody.innerHTML = '';

    // Pega os 4 primeiros produtos do array
    const produtosMaisVendidos = products.slice(0, 4);

    // Cria elementos HTML para cada produto e adiciona ao offcanvas
    produtosMaisVendidos.forEach((produto) => {
        const cardHTML = `
            <div class="card border-0 mb-3" style="width: 18rem;">
                <img src="${produto.image}" class="card-img-top bg-body-tertiary" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${produto.title}</h5>
                    <div class="d-flex flex-column justify-content-center">
                        <p class="card-text mb-0">Volume: ${produto.volume}</p>
                        <p class="card-text fs-5">Preço: R$${produto.preco}</p>
                        <a href="#" class="btn btn-danger col-12" onclick="adicionarAoCarrinho(${produto.id},'${produto.image}', '${produto.title}', ${produto.preco})">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </div>
        `;

        // Adiciona o card ao corpo do offcanvas
        offcanvasBody.innerHTML += cardHTML;
    });
}

// Chama a função para exibir os produtos mais vendidos quando o offcanvas é aberto
document.getElementById('offcanvas-mais-vendidos').addEventListener('shown.bs.offcanvas', function () {
    exibirProdutosNoOffcanvasMaisVendidos();
});

/**
* Adiciona os 4 primeiros produtos do array ao dropdown Mais Vendidos da navbar 
*/
function adicionarProdutosMaisVendidos() {
    const container = document.getElementById('produtos-container');

    // Pega os 4 primeiros produtos
    const produtosParaExibir = products.slice(0, 4);

    // Itera sobre os produtos e cria elementos HTML para cada um
    produtosParaExibir.forEach(product => {
        const card = `
            <li>
                <div class="card border-0" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top  bg-body-tertiary" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <div class="d-flex flex-column justify-content-center">
                            <p class="card-text mb-0">Volume: ${product.volume}</p>
                            <p class="card-text fs-5">Preço: R$${product.preco}</p>
                            <a href="#adicionar-ao-carrinho" class="btn btn-danger col-12" onclick="adicionarAoCarrinho(${product.id},'${product.image}', '${product.title}', ${product.preco})">Adicionar ao Carrinho</a>
                        </div>
                    </div>
                </div>
            </li>
        `;

        // Converter a string HTML em elementos DOM e anexá-los ao container
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = card;
        container.appendChild(tempDiv.firstElementChild);
    });
}

// Chama a função para adicionar os produtos mais vendidos quando a página é carregada
window.onload = adicionarProdutosMaisVendidos;

//================================== FIM  Exibição de Produtos ==================================

