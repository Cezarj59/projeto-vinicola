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
