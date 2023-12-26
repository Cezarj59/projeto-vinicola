
    // Variáveis Html
    const home = document.getElementById("home-section");
    const revenda = document.getElementById("revenda-section");

    function alternaPaginas(x) {
        console.log("chamou a função com x =", x);

        // Verifique se os elementos estão sendo encontrados
        console.log("home:", home);
        console.log("revenda:", revenda);

        switch (x) {
            case 1:
                home.style.display = "block";
                revenda.style.display = "none";
                break;
            case 2:
                home.style.display = "none";
                revenda.style.display = "block";
                break;
        }
    }



