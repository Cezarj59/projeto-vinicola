// Função para rolar para o topo
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para lidar com o evento de rolagem
window.onscroll = function () {
  // Obtém a referência para o elemento de navegação
  var navbar = document.getElementById("navbar");

  // Obtém a referência para o botão "Voltar ao Topo"
  var botaoVoltarAoTopo = document.getElementById('btnVoltarAoTopo');

  // Verifica se a largura da tela é maior ou igual a 575 pixels (desktop)
  var isDesktop = window.innerWidth >= 575;

  // Verifica se a posição de rolagem é maior que 50 pixels e se a tela é de desktop
  if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && isDesktop) {
      // Adiciona a classe "fixed-top" ao elemento de navegação
      navbar.classList.add("fixed-top");
  } else {
      // Remove a classe "fixed-top" do elemento de navegação
      navbar.classList.remove("fixed-top");
  }

  // Verifica se a posição de rolagem é maior que 500 pixels
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      // Remove a classe "d-none" do botão "Voltar ao Topo" para torná-lo visível
      botaoVoltarAoTopo.classList.remove('d-none');
  } else {
      // Adiciona a classe "d-none" ao botão "Voltar ao Topo" para ocultá-lo
      botaoVoltarAoTopo.classList.add('d-none');
  }
};
