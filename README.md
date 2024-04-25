# Projeto Front End - Vinícola 

![HTML5](https://img.shields.io/badge/HTML5-Responsive-E34F26)
![CSS3](https://img.shields.io/badge/CSS3-Style-1572B6)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3)
![JavaScript](https://img.shields.io/badge/JS-JavaScript-F7DF1E)
![Static Badge](https://shields.io./badge/DOM%20Manipulation-jQuery-000000)
![Single Page Application](https://img.shields.io/badge/SPA-Simulation-FFA500)
![Static Badge](https://shields.io./badge/Via%20Cep-API-FFFF00)
![Documnetation](https://shields.io/badge/Documentation-JSDoc-333333)


## Visão Geral

Este projeto consiste em um site responsivo que simula uma loja de vinhos online. Desenvolvido como parte do módulo avançado de HTML/CSS do curso de Desenvolvimento de Software da IT Step Computer Academy Brasil, o projeto oferece uma navegação intuitiva, páginas específicas para a loja online, galeria de imagens, informações sobre a vinícola, formulário de contato e destaque para revendedores.

## Tecnologias Utilizadas

- HTML/CSS (Responsivo)
- Bootstrap 5.1.3
- JavaScript
- Simulação de Single Page Application (SPA)

## Características Principais

### 1. Navegação Responsiva

Destacamos uma navbar fixa no topo que permanece visível durante o rolar da página. Em dispositivos móveis, a solução offcanvas é acionada quando a navbar colapsa, garantindo uma experiência suave.

### 2. Botão "Voltar ao Topo"

Incluímos um botão estrategicamente posicionado para facilitar o retorno ao início da página, proporcionando uma navegação mais eficiente.

### 3. Páginas Específicas

- **Loja Online:**
  - Paginação personalizada para explorar os produtos.
  - Alerta personalizado confirmando a adição de itens ao carrinho.

- **Galeria de Imagens:**
  - Permite explorar visualmente o universo da vinícola.

- **Sobre Nós:**
  - Breve apresentação da equipe ou da história da vinícola.

- **Contato:**
  - Formulário interativo para facilitar a comunicação.

- **Revendedores:**
  - Destaque para um formulário específico para potenciais revendedores.

### 4. Carrinho de Compras e Responsividade

- Exibe produtos adicionados com opções para exclusão e alteração de quantidade.
- Atualização dinâmica do preço.
- Garantia de responsividade utilizando Bootstrap e media queries.

### 5. Simulação SPA (Single Page Application)

O projeto simula uma SPA usando um único arquivo HTML. Transições suaves entre páginas, efeitos visuais como o efeito "vidro" e um spinner criam uma experiência moderna e cativante.

## Como Acessar o Projeto

Você pode acessar visualizar o projeto [clicando aqui](https://cezarj59.github.io/projeto-vinicola/).

## Como Utilizar

1. Clone este repositório para examinar ou contribuir para o projeto (opcional).
2. Certifique-se de ter as tecnologias mencionadas configuradas no seu ambiente.
3. Abra o arquivo `index.html` em seu navegador ou utilize um servidor local para visualizar o projeto.
4. Explore as diferentes páginas e funcionalidades do projeto.

## Documentação

Agora o projeto conta com documentação utilizando o JSDoc, que pode ser encontrada na pasta `js/out`. Para acessar a documentação, abra o arquivo `index.html` na pasta `out` em seu navegador.

## Armazenamento Local e Validação de Formulário

O projeto implementa o armazenamento local (Local Storage) para o carrinho de compras, garantindo que as informações do carrinho sejam mantidas mesmo após o fechamento do navegador.

Além disso, são aplicadas manipulações de strings em todos os campos para validação no formulário de revenda, garantindo que os dados inseridos sejam formatados corretamente antes do envio.

## Utilização de jQuery e Offcanvas

O projeto faz uso da biblioteca jQuery para simplificar a manipulação do DOM e adicionar interatividade aos elementos da página.

Os offcanvas são utilizados para exibir menus e conteúdos em dispositivos móveis, garantindo uma experiência de navegação intuitiva e responsiva.

## Consumo da API ViaCEP

A aplicação consome a API ViaCEP para preencher automaticamente os campos de endereço no formulário de revendedores, proporcionando uma experiência mais ágil e conveniente para os usuários.

