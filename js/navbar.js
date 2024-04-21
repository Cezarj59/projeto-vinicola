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
