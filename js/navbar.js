
// Variáveis Html
const home = document.getElementById("home");
const loja = document.getElementById("loja");
const carrinhoCompras = document.getElementById("carrinho");
const galeria = document.getElementById("galeria");
const sobreNos = document.getElementById("sobre-nos");
const contato = document.getElementById("contato");
const revenda = document.getElementById("revenda");


// Configuração inicial
home.style.display = "block";
loja.style.display = "none";
carrinhoCompras.style.display = "none";
galeria.style.display = "none";
sobreNos.style.display = "none";
contato.style.display = "none";
revenda.style.display = "none";

function alternaPaginas(x) {
  console.log("chamou a alternaPaginas com x =", x);

  // Exibe o spinner
  document.getElementById("spinner").classList.remove("d-none");

  // Simula um atraso (2 segundos) antes de navegar para a próxima página
  setTimeout(function () {
    switch (x) {
      case 0:
        document.title = "Home";
        home.style.display = "block";
        loja.style.display = "none";
        carrinhoCompras.style.display = "none";
        galeria.style.display = "none";
        sobreNos.style.display = "none";
        contato.style.display = "none";
        revenda.style.display = "none";
        break;

      case 1:
        document.title = "Loja";
        home.style.display = "none";
        loja.style.display = "block";
        carrinhoCompras.style.display = "none";
        galeria.style.display = "none";
        sobreNos.style.display = "none";
        contato.style.display = "none";
        revenda.style.display = "none";
        break;

      case 2:
        document.title = " Carrinho";
        home.style.display = "none";
        loja.style.display = "none";
        carrinhoCompras.style.display = "block";
        galeria.style.display = "none";
        sobreNos.style.display = "none";
        contato.style.display = "none";
        revenda.style.display = "none";
        break;
      case 5:
        document.title = "Galeria";
        home.style.display = "none";
        loja.style.display = "none";
        carrinhoCompras.style.display = "none";
        galeria.style.display = "block";
        sobreNos.style.display = "none";
        contato.style.display = "none";
        revenda.style.display = "none";
        break;
      case 7:
        document.title = "Sobre Nós";
        home.style.display = "none";
        loja.style.display = "none";
        carrinhoCompras.style.display = "none";
        galeria.style.display = "none";
        sobreNos.style.display = "block";
        contato.style.display = "none";
        revenda.style.display = "none";
        break;
      case 8:
        document.title = "Contato";
        home.style.display = "none";
        loja.style.display = "none";
        carrinhoCompras.style.display = "none";
        galeria.style.display = "none";
        sobreNos.style.display = "none";
        contato.style.display = "block";
        revenda.style.display = "none";
        break;
      case 9:
        document.title = "Revenda";
        home.style.display = "none";
        loja.style.display = "none";
        carrinhoCompras.style.display = "none";
        galeria.style.display = "none";
        sobreNos.style.display = "none";
        contato.style.display = "none";
        revenda.style.display = "block";
        break;
    }
    document.getElementById("spinner").classList.add("d-none");

    window.scrollTo(0, 0);
  }, 500);
}



/*------------style Navbar---------------*/
const navStyle = document.getElementsByClassName("add-active");
function active(x) {
  console.log("chamou a active com x =", x);
  // Remover a classe "active" de todos os elementos
  for (let i = 0; i < navStyle.length; i++) {
    navStyle[i].classList.remove("active");
  }

  // Adicionar a classe "active" ao elemento específico
  if (x >= 0 && x < navStyle.length) {
    navStyle[x].classList.add("active");
  }
}

/*------------offCanvas---------------*/
function abrirOffcanvas2() {
  // Fecha o primeiro offcanvas
  var offcanvas1 = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
  offcanvas1.hide();

  // Abre o segundo offcanvas
  var offcanvas2 = new bootstrap.Offcanvas(document.getElementById('offcanvas-mais-vendidos'));
  offcanvas2.show();
}

function fecharOffcanvas2() {

  // Fecha o segundo offcanvas
  var offcanvas2 = new bootstrap.Offcanvas(document.getElementById('offcanvas-mais-vendidos'));
  offcanvas2.hide();

  // Abre o primeiro offcanvas
  var offcanvas1 = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
  offcanvas1.show();


}

function fecharOffcanvas() {
  // Fecha o primeiro offcanvas
  var offcanvasElement = document.getElementById('offcanvasNavbar');
  var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
  
  if (offcanvas) {
    offcanvas.hide();
  }
}