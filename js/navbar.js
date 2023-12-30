
// Variáveis Html
const home = document.getElementById("home-section");
const galeria = document.getElementById("galeria-section");
const contato = document.getElementById("contato-section");
const revenda = document.getElementById("revenda-section");

// Configuração inicial
home.style.display = "block";
galeria.style.display = "none";
contato.style.display = "none";
revenda.style.display = "none";

function alternaPaginas(x) {
  console.log("chamou a alternaPaginas com x =", x);

  switch (x) {
    case 0:
      home.style.display = "block";
      galeria.style.display = "none";
      contato.style.display = "none";
      revenda.style.display = "none";
      break;
    case 5:
      home.style.display = "none";
      galeria.style.display = "block";
      contato.style.display = "none";
      revenda.style.display = "none";
      break;
    case 8:
      home.style.display = "none";
      galeria.style.display = "none";
      contato.style.display = "block";
      revenda.style.display = "none";
      break;
    case 9:
      home.style.display = "none";
      galeria.style.display = "none";
      contato.style.display = "none";
      revenda.style.display = "block";
      break;
  }


  window.scrollTo(0, 0);
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
  var offcanvas2 = new bootstrap.Offcanvas(document.getElementById('offcanvas2'));
  offcanvas2.show();
}

function fecharOffcanvas2() {

  // Fecha o segundo offcanvas
  var offcanvas2 = new bootstrap.Offcanvas(document.getElementById('offcanvas2'));
  offcanvas2.hide();

  // Abre o primeiro offcanvas
  var offcanvas1 = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
  offcanvas1.show();


}

function fecharOffcanvas() {
  // Fecha o primeiro offcanvas
  var offcanvas1 = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
  offcanvas1.hide();


}