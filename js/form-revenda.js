$(document).ready(function () {

    //############################## INÍCIO Validar Nome ######################################

    $("#inputNomeRevendedor").blur(function () {
        validaNome();
    });

    function validaNome() {
        let nome = $("#inputNomeRevendedor").val().trim();

        if (nome.length == 0) {
            exibirErro("Digite o Nome!!!");
        } else {
            exibirSucessoNome("Nome Valido!")

            nome = formatarNome(nome);

            if (contemCaracteresInvalidos(nome)) {
                exibirErro("Não deve conter caracteres inválidos!!!");
            } else {
                validarComprimentoNomes(nome);
            }
        }
    }


    /**
   * Exibe uma mensagem de erro relacionada ao campo de nome.
   * @param {string} mensagem - A mensagem de erro a ser exibida.
   */
    function exibirErro(mensagem) {
        $("#nomeHelpBlock").html(mensagem); // Define a mensagem de erro no bloco de ajuda do nome
        $("#nomeHelpBlock").removeClass("text-muted"); // Remove a classe de texto desativado
        $("#nomeHelpBlock").addClass("text-danger"); // Adiciona a classe de texto de erro
        $("#inputNomeRevendedor").removeClass("border-dark-subtle"); // Remove a borda sutil escura do campo de nome
        $("#inputNomeRevendedor").addClass("border-danger"); // Adiciona a borda de cor vermelha ao campo de nome
    }


    /**
 * Exibe uma mensagem de sucesso relacionada ao campo de nome.
 * @param {string} mensagem - A mensagem de sucesso a ser exibida.
 */
    function exibirSucessoNome(mensagem) {
        $("#nomeHelpBlock").html(mensagem); // Define a mensagem de sucesso no bloco de ajuda do nome
        $("#nomeHelpBlock").removeClass("text-danger text-muted"); // Remove a classe de texto de erro
        $("#nomeHelpBlock").addClass("text-success"); // Adiciona a classe de texto de sucesso
        $("#inputNomeRevendedor").removeClass("border-danger border-dark-subtle"); // Remove a borda de cor vermelha do campo de nome
        $("#inputNomeRevendedor").addClass("border-success"); // Adiciona a borda de cor verde ao campo de nome
    }


    /**
     * Faz a formatação do nome.
     * @param {string} nome - O nome completo a ser formatado.
     */


    function formatarNome(nome) {
        nome = removerEspacosExtras(nome);
        nome = capitalizarPrimeiraLetra(nome);
        $("#inputNomeRevendedor").val(nome);
        return nome;
    }


    /**
     * Valida o comprimento dos nomes e sobrenomes.
     * @param {string} nome - O nome completo a ser validado.
     */

    function validarComprimentoNomes(nome) {
        // Divide o nome em um vetor de partes separadas por espaços
        let vetorNomes = nome.split(" ");


        if (vetorNomes.length == 1) {
            // Se houver apenas uma parte no nome, exibe uma mensagem de erro
            exibirErro("Digite o nome completo!");

        } else if (vetorNomes.length == 2 || vetorNomes.length == 3) {
            // Se houver duas ou três partes no nome, captura o primeiro e o último nome
            let primeiroNome = vetorNomes[0];
            let ultimoNome = vetorNomes[vetorNomes.length - 1];

            // Verifica se o primeiro ou o último nome têm menos de 3 caracteres e exibe uma mensagem de erro, se aplicável
            if (primeiroNome.length < 3 || ultimoNome.length < 3) {
                exibirErro("O nome e sobrenome devem ter no mínimo 3 caracteres!!!");
            }

        } else if (vetorNomes.length > 3) {
            // Se houver mais de três partes no nome
            // Captura o primeiro, os nomes do meio e o último nome
            let primeiroNome = vetorNomes[0];
            let nomeDoMeio = vetorNomes.slice(1, vetorNomes.length - 1).join(' '); // Combina todos os nomes do meio em uma única string
            let ultimoNome = vetorNomes[vetorNomes.length - 1];

            // Verifica se o primeiro ou o último nome têm menos de 3 caracteres e exibe uma mensagem de erro, se aplicável
            if (primeiroNome.length < 3 || ultimoNome.length < 3) {
                exibirErro("O nome e sobrenome devem ter no mínimo 3 caracteres!!!");
            }
        }
    }


    /**
   * Capitaliza a primeira letra de cada palavra em uma frase.
   * @param {string} frase - A frase a ser capitalizada.
   * @returns {string} - A frase com a primeira letra de cada palavra capitalizada.
   */


    function capitalizarPrimeiraLetra(frase) {
        // Divide a frase em palavras separadas por espaços
        let palavras = frase.split(" ");

        // Itera sobre cada palavra na frase
        for (let i = 0; i < palavras.length; i++) {
            // Capitaliza a primeira letra da palavra e converte o restante para minúsculas
            palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].substring(1).toLowerCase();
        }

        // Junta as palavras novamente em uma única frase
        palavras = palavras.join(" ");

        // Substitui certas combinações de palavras por versões com a primeira letra minúscula
        palavras = palavras.replace(" Do ", " do ").replace(" Dos ", " dos ").replace(" E ", " e ");
        palavras = palavras.replace(" Da ", " da ").replace(" Das ", " das ").replace(" De ", " de ");

        return palavras;
    }

    /**
     * Remove espaços extras de uma string.
     * @param {string} str - A string da qual remover espaços extras.
     * @returns {string} - A string sem espaços extras.
     */

    function removerEspacosExtras(str) {
        // Enquanto a string contiver dois espaços consecutivos, substitui-os por um único espaço
        while (str.includes("  ")) {
            str = str.replace("  ", " ");
        }
        return str;
    }

    /**
     * Verifica se uma string contém números.
     * @param {string} str - A string a ser verificada.
     * @returns {boolean} - true se a string contiver números, false caso contrário.
     */
    function contemNumero(str) {
        // Itera sobre cada caractere na string
        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);

            // Verifica se o caractere é um número
            if (!isNaN(parseInt(char))) {
                return true;
            }
        }
        return false;
    }

    /**
     * Verifica se uma string contém caracteres inválidos.
     * @param {string} str - A string a ser verificada.
     * @returns {boolean} - true se a string contiver caracteres inválidos, false caso contrário.
     */

    function contemCaracteresInvalidos(str) {
        // Lista de caracteres válidos
        let alfabeto = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÁáÀàÃãÉéÈèÍíÌìÓóÒòÕõÚúÙùÜüÇç'";

        // Itera sobre cada caractere na string
        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);

            // Verifica se o caractere não está na lista de caracteres válidos
            if (!alfabeto.includes(char)) {
                return true;
            }
        }

        return false;
    }

    //------------------------------------ FIM Validar Nome -----------------------------------------


    //################################## INÍCIO Validar CPF #########################################

    /**
     * Valida o CPF inserido no campo de entrada "#inputCpfRevendedor" ao perder o foco.
     */
    $("#inputCpfRevendedor").blur(function () {
        validarCpf();
    });

    function validarCpf() {
        let cpf = $("#inputCpfRevendedor").val();

        if (cpf.length != 14) {
            exibirErroCpf("CPF inválido! Precisa ter 11 números.");
        } else if (!verificaCPF(cpf)) {
            exibirErroCpf("CPF inválido!");
        } else {
            exibirSucessoCpf("CPF válido!");
        }

        if (cpf.length == 0) {
            exibirErroCpf("Digite o CPF!");
        }
    }

    function verificaCPF(cpf) {
        cpf = removerNaoNumericos(cpf) // Remove todos os caracteres que não são dígitos

        // Verifica se todos os dígitos do CPF são iguais; se sim, CPF inválido
        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        // Calcula o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let digito1 = 11 - (soma % 11);
        if (digito1 > 9) {
            digito1 = 0;
        }

        // Calcula o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        let digito2 = 11 - (soma % 11);
        if (digito2 > 9) {
            digito2 = 0;
        }

        // Verifica se os dígitos calculados são iguais aos dígitos do CPF
        return cpf.substr(-2) === digito1.toString() + digito2.toString();
    }

    /**
 * Exibe uma mensagem de erro relacionada ao campo de CPF.
 * @param {string} mensagem - A mensagem de erro a ser exibida.
 */
    function exibirErroCpf(mensagem) {
        $("#cpfHelpBlock").html(mensagem); // Define a mensagem de erro no bloco de ajuda do CPF
        $("#cpfHelpBlock").removeClass("text-muted"); // Remove a classe de texto desativado
        $("#cpfHelpBlock").addClass("text-danger"); // Adiciona a classe de texto de erro
        $("#inputCpfRevendedor").removeClass("border-dark-subtle"); // Remove a borda sutil escura do campo de CPF
        $("#inputCpfRevendedor").addClass("border-danger"); // Adiciona a borda de cor vermelha ao campo de CPF
    }

    /**
     * Exibe uma mensagem de sucesso relacionada ao campo de CPF.
     * @param {string} mensagem - A mensagem de sucesso a ser exibida.
     */
    function exibirSucessoCpf(mensagem) {
        $("#cpfHelpBlock").html(mensagem); // Define a mensagem de sucesso no bloco de ajuda do CPF
        $("#cpfHelpBlock").removeClass("text-danger text-muted"); // Remove a classe de texto de erro
        $("#cpfHelpBlock").addClass("text-success"); // Adiciona a classe de texto de sucesso
        $("#inputCpfRevendedor").removeClass("border-danger border-dark-subtle"); // Remove a borda de cor vermelha do campo de CPF
        $("#inputCpfRevendedor").addClass("border-success"); // Adiciona a borda de cor verde ao campo de CPF
    }


    /**
     * Remove caracteres não numéricos de uma string.
     * @param {string} string - A string da qual remover caracteres não numéricos.
     * @returns {string} - A string resultante contendo apenas caracteres numéricos.
     */

    function removerNaoNumericos(string) {
        let resultado = "";
        for (let i = 0; i < string.length; i++) {
            const caractere = string[i];
            if (!isNaN(caractere) && caractere !== " ") {
                resultado += caractere;
            }
        }
        return resultado;
    }

    /**
     * Formata e atualiza o campo de entrada do CPF "#inputCpfRevendedor" enquanto o usuário digita.
     */

    function alterarInput() {
        let input = $("#inputCpfRevendedor").val();
        let cpf = removerNaoNumericos(input);
        let cpfFormatado = '';

        // Verifica se o CPF tem mais de 11 dígitos
        if (cpf.length > 11) {
            cpf = cpf.substring(0, 11); // Limita o CPF aos 11 primeiros dígitos
        }

        // Formata o CPF com pontos e traço
        for (let i = 0; i < cpf.length; i++) {
            if (i == 3 || i == 6) {
                cpfFormatado += '.';
            } else if (i == 9) {
                cpfFormatado += '-';
            }
            cpfFormatado += cpf[i];
        }

        // Define o CPF formatado no campo de entrada
        $("#inputCpfRevendedor").val(cpfFormatado);
    }


    // Registra o evento "input" no campo de entrada do CPF e chama a função alterarInput quando o evento é acionado
    $("#inputCpfRevendedor").on("input", alterarInput);




    //------------------------------------ FIM Validar CPF -----------------------------------------

    //################################ INÍCIO Validar Email ########################################

    $("#inputEmailRevendedor").blur(function () {
        let email = $("#inputEmailRevendedor").val().trim();
        validarEmail(email);


    });

    /**
     * Exibe uma mensagem de erro relacionada ao campo de Email.
     * @param {string} mensagem - A mensagem de erro a ser exibida.
     */
    function exibirErroEmail(mensagem) {
        $("#emailHelpBlock").html(mensagem);
        $("#emailHelpBlock").removeClass("text-muted");
        $("#emailHelpBlock").addClass("text-danger");
        $("#inputEmailRevendedor").removeClass("border-dark-subtle");
        $("#inputEmailRevendedor").addClass("border-danger");
    }

    /**
     * Exibe uma mensagem de sucesso relacionada ao campo de Email.
     * @param {string} mensagem - A mensagem de sucesso a ser exibida.
     */
    function exibirSucessoEmail(mensagem) {
        $("#emailHelpBlock").html(mensagem);
        $("#emailHelpBlock").removeClass("text-danger text-muted");
        $("#emailHelpBlock").addClass("text-success");
        $("#inputEmailRevendedor").removeClass("border-danger border-dark-subtle");
        $("#inputEmailRevendedor").addClass("border-success");
    }

    // Função para verificar se o e-mail não possui espaços em branco
    function naoPossuiEspacos(email) {
        return !email.includes(' ');
    }

    // Função para verificar se o e-mail possui o símbolo @
    function possuiArroba(email) {
        return email.indexOf('@') !== -1;
    }

    // Função para verificar se há algum caracter antes do @
    function possuiCaracteresAntesArroba(email) {
        let partes = email.split('@');
        return partes[0].length > 0;
    }

    // Função para verificar se há algum caracter após o @
    function possuiCaracteresAposArroba(email) {
        let partes = email.split('@');
        return partes[1].length > 0;
    }

    // Função para verificar se há pelo menos um ponto após o caracter depois do @
    function possuiPontoAposCaracterDepoisArroba(email) {
        let partes = email.split('@');
        let parteDepoisDoArroba = partes[1];
        return parteDepoisDoArroba.indexOf('.') !== -1;
    }

    // Função para verificar se há pelo menos um caractere após o último ponto
    function possuiCaractereAposUltimoPonto(email) {
        let partes = email.split('@');
        let parteDepoisDoArroba = partes[1];
        let partesDepoisDoPonto = parteDepoisDoArroba.split('.');
        let parteDepoisDoUltimoPonto = partesDepoisDoPonto[1];
        return parteDepoisDoUltimoPonto && parteDepoisDoUltimoPonto.length > 0;
    }

    // Função para verificar se o e-mail contém apenas caracteres permitidos
    function possuiApenasCaracteresPermitidos(email) {
        let caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!#$%&\'*+/=?^_`{|}~-@';
        for (let char of email) {
            if (caracteresPermitidos.indexOf(char) === -1) {
                return false;
            }
        }
        return true;
    }

    // Função para verificar se o e-mail possui apenas um símbolo @
    function possuiApenasUmArroba(email) {
        let count = 0;
        for (let char of email) {
            if (char === '@') {
                count++;
            }
        }
        return count === 1;
    }

    // Função para verificar se a parte do domínio não contém pontos no meio
    function naoPossuiPontosNoDominio(email) {
        let partes = email.split('@');
        if (partes.length !== 2) {
            return false; // O e-mail não possui um "@" válido
        }

        let dominio = partes[1];
        return dominio.indexOf('.') === dominio.lastIndexOf('.');
    }

    // Função para verificar se a parte do domínio não contém caracteres inválidos
    function naoPossuiCaracteresInvalidosNoDominio(email) {
        let partes = email.split('@');
        if (partes.length !== 2) {
            return false; // O e-mail não possui um "@" válido
        }

        let dominio = partes[1];

        // Caracteres permitidos: letras, números, hífens e sublinhados
        let caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.';

        for (let i = 0; i < dominio.length; i++) {
            let caractere = dominio.charAt(i);
            if (caracteresPermitidos.indexOf(caractere) === -1) {
                return false; // Caractere inválido encontrado
            }
        }

        return true; // Todos os caracteres são válidos
    }


    // Função para verificar se o tamanho do e-mail está dentro do limite máximo
    function tamanhoDentroDoLimite(email) {
        return email.length <= 254;
    }

    // Função principal de validação de e-mail
    function validarEmail(email) {
        if (email == "") {
            exibirErroEmail("Digite o Email!");
            return false;
        }

        if (!naoPossuiEspacos(email)) {
            exibirErroEmail("E-mail não deve conter espaços.");
            return false;
        }

        if (!possuiArroba(email)) {
            exibirErroEmail("E-mail deve conter o símbolo @.");
            return false;
        }

        if (!possuiApenasUmArroba(email)) {
            exibirErroEmail("E-mail deve conter apenas um símbolo @.");
            return false;
        }

        if (!possuiCaracteresAntesArroba(email)) {
            exibirErroEmail("E-mail deve conter caracteres antes do @.");
            return false;
        }

        if (!possuiCaracteresAposArroba(email)) {
            exibirErroEmail("E-mail deve conter caracteres após o @.");
            return false;
        }

        if (!possuiPontoAposCaracterDepoisArroba(email)) {
            exibirErroEmail("E-mail deve conter pelo menos um ponto após o @.");
            return false;
        }
        if (!naoPossuiPontosNoDominio(email)) {
            exibirErroEmail("A parte do domínio do e-mail não deve conter pontos no meio.");
            return false;
        }

        if (!possuiCaractereAposUltimoPonto(email)) {
            exibirErroEmail("E-mail deve conter pelo menos um caractere após o último ponto.");
            return false;
        }

        if (!possuiApenasCaracteresPermitidos(email)) {
            exibirErroEmail("E-mail contém caracteres inválidos.");
            return false;
        }

        if (!tamanhoDentroDoLimite(email)) {
            exibirErroEmail("E-mail excede o limite máximo de caracteres.");
            return false;
        }

        if (!naoPossuiCaracteresInvalidosNoDominio(email)) {
            exibirErroEmail("A parte do domínio do e-mail contém caracteres inválidos.");
            return false;
        }
        exibirSucessoEmail("E-mail válido!");
        return true;
    }


    //------------------------------------ FIM Validar Email -----------------------------------------

    //############################## INÍCIO Consumo API Viacep ######################################

    /* Limpa os campos do formulário relacionados ao endereço (rua, bairro, cidade, UF, IBGE).*/

    function limpa_formulário_cep() {
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }

    // Quando o campo de CEP perde o foco.
    $("#cep").blur(function () {
        // Obtém o valor do CEP e remove todos os caracteres não numéricos.
        var cep = $(this).val().replace(/\D/g, '');

        // Verifica se o campo de CEP possui um valor informado.
        if (cep != "") {
            // Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            // Valida o formato do CEP.
            if (validacep.test(cep)) {
                // Preenche os campos com "..." enquanto consulta o webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#complemento").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ddd").val("...");

                // Consulta o webservice viacep.com.br.
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
                    if (!("erro" in dados)) {
                        // Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#complemento").val(dados.complemento);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ddd").val(dados.ddd);
                    } else {
                        // CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } else {
                // CEP inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } else {
            // CEP sem valor, limpa o formulário.
            limpa_formulário_cep();
        }
    });

    //-------------------------------------- FIM Consumo API Viacep -----------------------------------------------
});

