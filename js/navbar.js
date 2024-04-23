// Quando o documento estiver pronto, configura a exibição inicial dos elementos
$(document).ready(function () {
  // Exibe a página inicial e oculta as demais
  $("#home").show();
  $("#loja, #carrinho, #galeria, #sobre-nos, #contato, #revenda").hide();
});


/**
 * Função para alternar entre as páginas do site.
 * @param {number} x - O índice da página a ser exibida.
 */
function alternaPaginas(x) {
  console.log("chamou a alternaPaginas com x =", x);

  // Exibe o spinner
  $("#spinner").removeClass("d-none");

  // Simula um atraso (2 segundos) antes de navegar para a próxima página
  setTimeout(function () {
    switch (x) {
      case 0:
        document.title = "Home";
        $("#home").show();
        $("#loja, #carrinho, #galeria, #sobre-nos, #contato, #revenda").hide();
        break;

      case 1:
        document.title = "Loja";
        $("#loja").show();
        $("#home, #carrinho, #galeria, #sobre-nos, #contato, #revenda").hide();
        break;

      case 2:
        document.title = "Carrinho";
        $("#carrinho").show();
        $("#home, #loja, #galeria, #sobre-nos, #contato, #revenda").hide();
        break;

      case 5:
        document.title = "Galeria";
        $("#galeria").show();
        $("#home, #loja, #carrinho, #sobre-nos, #contato, #revenda").hide();
        break;

      case 7:
        document.title = "Sobre Nós";
        $("#sobre-nos").show();
        $("#home, #loja, #carrinho, #galeria, #contato, #revenda").hide();
        break;

      case 8:
        document.title = "Contato";
        $("#contato").show();
        $("#home, #loja, #carrinho, #galeria, #sobre-nos, #revenda").hide();
        break;

      case 9:
        document.title = "Revenda";
        $("#revenda").show();
        $("#home, #loja, #carrinho, #galeria, #sobre-nos, #contato").hide();
        break;
    }
    $("#spinner").addClass("d-none");

    window.scrollTo(0, 0);
  }, 500);
}

/**
 * Função para ativar um item na barra de navegação.
 * @param {number} index - O índice do item a ser ativado.
 */
function active(index) {
  console.log("chamou a active com x =", index);

  // Remover a classe "active" de todos os elementos
  $(".add-active").removeClass("active");

  // Adicionar a classe "active" ao elemento específico
  if (index >= 0 && index < $(".add-active").length) {
    $(".add-active").eq(index).addClass("active");
  }
}

/**
 * Função para abrir o segundo offcanvas.
 */
function abrirOffcanvas2() {
  // Fecha o primeiro offcanvas
  let offcanvas1 = new bootstrap.Offcanvas($("#offcanvasNavbar"));
  offcanvas1.hide();

  // Abre o segundo offcanvas
  let offcanvas2 = new bootstrap.Offcanvas($("#offcanvas-mais-vendidos"));
  offcanvas2.show();
}

/**
 * Função para fechar o segundo offcanvas e abrir o primeiro.
 */
function fecharOffcanvas2() {
  // Fecha o segundo offcanvas
  let offcanvas2 = new bootstrap.Offcanvas($("#offcanvas-mais-vendidos"));
  offcanvas2.hide();

  // Abre o primeiro offcanvas
  let offcanvas1 = new bootstrap.Offcanvas($("#offcanvasNavbar"));
  offcanvas1.show();
}

/**
 * Função para fechar o offcanvas.
 */
function fecharOffcanvas() {
  // Fecha o offcanvas
  let offcanvas = new bootstrap.Offcanvas($("#offcanvasNavbar"));
  offcanvas.hide();
}


/**
 * Função para rolar suavemente até o topo da página.
 */
function voltarAoTopo() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
}

/**
 * Função para lidar com o evento de rolagem.
 */
$(window).scroll(function () {
  // Obtém uma referência para o elemento de navegação
  var navbar = $("#navbar");

  // Obtém uma referência para o botão "Voltar ao Topo"
  var botaoVoltarAoTopo = $('#btnVoltarAoTopo');

  // Verifica se a largura da tela é maior ou igual a 575 pixels (desktop)
  var isDesktop = $(window).width() >= 575;

  // Verifica se a posição de rolagem é maior que 50 pixels e se a tela é de desktop
  if (($(document).scrollTop() > 50 || $(document.documentElement).scrollTop() > 50) && isDesktop) {
    // Adiciona a classe "fixed-top" ao elemento de navegação
    navbar.addClass("fixed-top");
  } else {
    // Remove a classe "fixed-top" do elemento de navegação
    navbar.removeClass("fixed-top");
  }

  // Verifica se a posição de rolagem é maior que 500 pixels
  if ($(document).scrollTop() > 500 || $(document.documentElement).scrollTop() > 500) {
    // Remove a classe "d-none" do botão "Voltar ao Topo" para torná-lo visível
    botaoVoltarAoTopo.removeClass('d-none');
  } else {
    // Adiciona a classe "d-none" ao botão "Voltar ao Topo" para ocultá-lo
    botaoVoltarAoTopo.addClass('d-none');
  }
});
