//----------------Pagination-------------------------
// Cria um array com 100 elementos, onde cada elemento é uma string no formato 'Item N',
// onde N é o índice mais 1.
const products = [
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },

    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },

    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },

    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },

    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-suave.png', title: 'Vinho Tinto Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/tinto-seco.png', title: 'Vinho Tinto Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/branco-seco.png', title: 'Vinho Branco Seco', volume: '750ml', alcoholPercentage: 11 },
    { image: 'img/mais-vendidos/rose-suave.png', title: 'Vinho Rosé Suave', volume: '750ml', alcoholPercentage: 11 },
    // Adicione mais produtos conforme necessário
];
// Array.from({ length: 100 }).map((_, i) => `Item ${(i + 1)}`);

//=============================================================================
// Função utilitária para criação de elementos HTML
function createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

// Função utilitária para adicionar event listener a um elemento
function addEventListener(element, event, callback) {
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
    const start = page * state.perPage;
    const end = start + state.perPage;

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
                    <p class="card-text mb-0">Volume: ${product.volume}</p>
                    <p class="card-text">Teor Alcoólico: ${product.alcoholPercentage}%</p>
                </div>
                <a href="#" class="btn btn-danger col-12">Adicionar ao Carrinho</a>
            </div>
        </div>
    `;

    // Converter a string HTML em elementos DOM e anexá-los ao container
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = card;
    container.appendChild(tempDiv.firstElementChild);
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

        addEventListener(button, 'click', () => {
            navigation.goTo(number);
            update();
        });
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

// Estado inicial da aplicação
const state = {
    page: 1,
    perPage: 9,
    totalPage: Math.ceil(products.length / 9),
    maxVisibleButtons: 3,
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
    addEventListener(getElement('.first'), 'click', () => {
        navigation.goTo(1);
        update();
    });
    addEventListener(getElement('.last'), 'click', () => {
        navigation.goTo(state.totalPage);
        update();
    });
    addEventListener(getElement('.next'), 'click', () => {
        navigation.next();
        update();
    });
    addEventListener(getElement('.prev'), 'click', () => {
        navigation.prev();
        update();
    });
}

// Chama a função de inicialização
init();
