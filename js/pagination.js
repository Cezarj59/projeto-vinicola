// Cria um array com 100 elementos, onde cada elemento é uma string no formato 'Item N',
// onde N é o índice mais 1.
const data = Array.from({ length: 100 }).map((_, i) => `Item ${(i + 1)}`);

//=============================================================================

// Configuração inicial do estado da aplicação.
let perPage = 9;
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage),
};

// Objeto que fornece métodos para manipulação do DOM.
const html = {
    get(element) {
        return document.querySelector(element);
    },
};

// Objeto que contém métodos para controle de navegação.
const controls = {
    next() {
        state.page++;

        const lastPage = state.page > state.totalPage;
        if (lastPage) {
            state.page--;
        }
    },
    prev() {
        state.page--;

        if (state.page < 1) {
            state.page++;
        }
    },
    goTo(page) {
        if (page < 1) {
            page = 1;
        }

        state.page = page;

        if (page > state.totalPage) {
            state.page = state.totalPage;
        }
    },
    createListeners() {
        // Adiciona event listeners aos botões de navegação.
        html.get('.first').addEventListener('click', () => {
            controls.goTo(1);
            update();
        });

        html.get('.last').addEventListener('click', () => {
            controls.goTo(state.totalPage);
            update();
        });
        html.get('.next').addEventListener('click', () => {
            controls.next();
            update();
        });
        html.get('.prev').addEventListener('click', () => {
            controls.prev();
            update();
        });
    },
};

// Objeto que contém métodos relacionados à lista de itens.
const list = {
    create(item) {
        // Cria um novo elemento div para o item e o adiciona à lista no DOM.
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = item;

        html.get('.list').appendChild(div);
    },
    update() {
        // Limpa a lista no DOM.
        html.get('.list').innerHTML = '';

        // Calcula o índice inicial e final dos itens a serem exibidos na página atual.
        let page = state.page - 1;
        let start = page * state.perPage;
        let end = start + state.perPage;

        // Obtém os itens a serem exibidos na página atual e os adiciona à lista no DOM.
        const paginateItems = data.slice(start, end);
        paginateItems.forEach(list.create);
    },
};

// Função de atualização geral que chama o método update da lista.
function update() {
    list.update();
}

// Função de inicialização que chama a atualização da lista e cria os event listeners.
function init() {
    list.update();
    controls.createListeners();
}

// Chama a função de inicialização.
init();
