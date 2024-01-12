//----------------Pagination-------------------------
// Cria um array com 100 elementos, onde cada elemento é uma string no formato 'Item N',
// onde N é o índice mais 1.

const products = [
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



// Array.from({ length: 100 }).map((_, i) => `Item ${(i + 1)}`);

//=============================================================================
// Estado inicial da aplicação
const state = {
    page: 1,
    quantidadePorPagina: 9,
    totalPage: Math.ceil(products.length / 9),
    maxVisibleButtons: 3,
};


// Função utilitária para criação de elementos HTML
function createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

// Função utilitária para adicionar event listener a um elemento
function adicionaEventListener(element, event, callback) {
    element.addEventListener(event, callback);
}

// Função utilitária para obter um elemento do DOM por seletor
function getElement(selector) {
    return document.querySelector(selector);
}

// Função utilitária para atualizar a lista de itens no DOM
function updateItemList() {
    const listContainer = getElement('.list');
    listContainer.innerHTML = '';

    const page = state.page - 1;
    const start = page * state.quantidadePorPagina;
    const end = start + state.quantidadePorPagina;

    const paginateItems = products.slice(start, end);
    paginateItems.forEach(item => createProductCard(item, listContainer));
}



// Função utilitária para criar um item na lista no DOM
//Templates em Strings:
function createProductCard(product, container) {
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
                <a href="#" class="btn btn-danger col-12" onclick="adicionarAoCarrinho(${product.id},'${product.image}', '${product.title}', ${product.preco}, )">Adicionar ao Carrinho</a>
            </div>
        </div>
    `;

    // Converter a string HTML em elementos DOM e anexá-los ao container
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = card;
    container.appendChild(tempDiv.firstElementChild);
}

const carrinho = [];
function adicionarAoCarrinho(id, image, title, preco) {
    const newItem = { id, image, title, preco };
    carrinho.push(newItem);

    alert(`Produto ${title} adicionado ao carrinho!`);
    console.log('Itens no carrinho:', carrinho);

    // Atualiza o total do carrinho
    updateTotal();
}


function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product");
    let totalAmount = 0;

    for (let i = 0; i < cartProducts.length; i++) {
        const productPrice = parseFloat(cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", "."));
        const productQuantity = parseFloat(cartProducts[i].getElementsByClassName("product-qtd-input")[0].value);

        totalAmount += productPrice * productQuantity;
    }

    totalAmount = totalAmount.toFixed(2);
    totalAmount = totalAmount.replace(".", ",");
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount;
}




// Objeto para controle de navegação
const navigation = {
    next() {
        state.page = Math.min(state.page + 1, state.totalPage);
    },
    prev() {
        state.page = Math.max(state.page - 1, 1);
    },
    goTo(page) {
        state.page = Math.max(1, Math.min(page, state.totalPage));
    },
};

// Objeto para controle dos botões de navegação
const navigationButtons = {
    element: getElement('.controls .numbers'),
    createButton(number) {
        const button = createElement('a', 'page-link', number);

        // Adiciona a classe 'active' ao botão correspondente à página atual.
        if (state.page == number) {
            button.classList.add('active');
        }

        adicionaEventListener(button, 'click', () => {
            navigation.goTo(number);
            update();
        });

        console.log(this.element);

        this.element.appendChild(button);
        return button;
    },

    updateButtons() {
        this.element.innerHTML = '';

        const { maxLeft, maxRight } = this.calculateMaxVisible();
        for (let page = maxLeft; page <= maxRight; page++) {
            this.createButton(page);
        }
    },
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


// Função para atualizar tanto a lista quanto os botões de navegação
function update() {
    updateItemList();
    navigationButtons.updateButtons();
}

// Função de inicialização
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

// Chama a função de inicialização
init();
