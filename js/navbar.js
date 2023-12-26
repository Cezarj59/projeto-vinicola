
// Variáveis Html
const home = document.getElementById("home-section");
const contato = document.getElementById("contato-section");
const revenda = document.getElementById("revenda-section");

// Configuração inicial
home.style.display = "block";
contato.style.display = "none";
revenda.style.display = "none";

function alternaPaginas(x) {
    console.log("chamou a função com x =", x);

    // Verifique se os elementos estão sendo encontrados
    console.log("home:", home);
    console.log("revenda:", revenda);

    switch (x) {
        case 1:
            home.style.display = "block";
            contato.style.display = "none";
            revenda.style.display = "none"; 
            break;
        case 7:
            home.style.display = "none";
            contato.style.display = "block";
            revenda.style.display = "none";
            break;
        case 8:
            home.style.display = "none";
            contato.style.display = "none";
            revenda.style.display = "block";
            break;
    }
}



