// Funções genéricas para manipulação de formulários

/**
 * Exibe uma mensagem de erro relacionada a um campo do formulário.
 * @param {string} campoId - O ID do campo do formulário.
 * @param {string} mensagem - A mensagem de erro a ser exibida.
 */
function exibirErro(campoId, mensagem) {
    $(`#${campoId}HelpBlock`).html(mensagem); // Define a mensagem de erro no bloco de ajuda do campo
    $(`#${campoId}HelpBlock`).removeClass("text-muted"); // Remove a classe de texto desativado
    $(`#${campoId}HelpBlock`).addClass("text-danger"); // Adiciona a classe de texto de erro
    $(`#${campoId}`).removeClass("border-dark-subtle"); // Remove a borda sutil escura do campo
    $(`#${campoId}`).addClass("border-danger"); // Adiciona a borda de cor vermelha ao campo
}

/**
 * Exibe uma mensagem de sucesso relacionada a um campo do formulário.
 * @param {string} campoId - O ID do campo do formulário.
 * @param {string} mensagem - A mensagem de sucesso a ser exibida.
 */
function exibirSucesso(campoId, mensagem) {
    $(`#${campoId}HelpBlock`).html(mensagem); // Define a mensagem de sucesso no bloco de ajuda do campo
    $(`#${campoId}HelpBlock`).removeClass("text-danger text-muted"); // Remove a classe de texto de erro
    $(`#${campoId}HelpBlock`).addClass("text-success"); // Adiciona a classe de texto de sucesso
    $(`#${campoId}`).removeClass("border-danger border-dark-subtle"); // Remove a borda de cor vermelha do campo
    $(`#${campoId}`).addClass("border-success"); // Adiciona a borda de cor verde ao campo
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

/**
    * Faz a formatação de um nome.
    * @param {string} nome - O nome completo a ser formatado.
    */

function formatarNome(nome) {
    nome = removerEspacosExtras(nome);
    nome = capitalizarPrimeiraLetra(nome);
    $("#inputNome").val(nome);
    return nome;
}

// Restante do código relacionado ao formulário...


$(document).ready(function () {

    //############################## INÍCIO Validar Nome ######################################

    /**
     * Valida o comprimento dos nomes e sobrenomes.
     * @param {string} nome - O nome completo a ser validado.
     */

    function validarComprimentoNomes(nome) {
        // Divide o nome em um vetor de partes separadas por espaços
        let vetorNomes = nome.split(" ");


        if (vetorNomes.length == 1) {
            // Se houver apenas uma parte no nome, exibe uma mensagem de erro
            exibirErro("inputNome", "Digite o nome completo!");

        } else if (vetorNomes.length == 2 || vetorNomes.length == 3) {
            // Se houver duas ou três partes no nome, captura o primeiro e o último nome
            let primeiroNome = vetorNomes[0];
            let ultimoNome = vetorNomes[vetorNomes.length - 1];

            // Verifica se o primeiro ou o último nome têm menos de 3 caracteres e exibe uma mensagem de erro, se aplicável
            if (primeiroNome.length < 3 || ultimoNome.length < 3) {
                exibirErro("inputNome", "O nome e sobrenome devem ter no mínimo 3 caracteres!!!");
            }

        } else if (vetorNomes.length > 3) {
            // Se houver mais de três partes no nome
            // Captura o primeiro, os nomes do meio e o último nome
            let primeiroNome = vetorNomes[0];
            let nomeDoMeio = vetorNomes.slice(1, vetorNomes.length - 1).join(' '); // Combina todos os nomes do meio em uma única string
            let ultimoNome = vetorNomes[vetorNomes.length - 1];

            // Verifica se o primeiro ou o último nome têm menos de 3 caracteres e exibe uma mensagem de erro, se aplicável
            if (primeiroNome.length < 3 || ultimoNome.length < 3) {
                exibirErro("inputNome", "O nome e sobrenome devem ter no mínimo 3 caracteres!!!");
            }
        }
    }

    function validaNome() {
        let nome = $("#inputNome").val().trim();

        if (nome.length == 0) {
            exibirErro("inputNome", "Digite o Nome!!!");
        } else {
            exibirSucesso("inputNome", "Nome Valido!")

            nome = formatarNome(nome);

            if (contemCaracteresInvalidos(nome)) {
                exibirErro("inputNome", "Não deve conter caracteres inválidos!!!");
            } else {
                validarComprimentoNomes(nome);
            }
        }
    }




    $("#inputNome").blur(function () {
        validaNome();
    });
    //------------------------------------ FIM Validar Nome -----------------------------------------
    /**
     * Verifica se um CPF é válido.
     * @param {string} cpf - O CPF a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o CPF for válido, caso contrário, retorna falso.
     */
    function verificaCPF(cpf) {
        cpf = removerNaoNumericos(cpf); // Remove todos os caracteres que não são dígitos

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
     * Formata o CPF em um campo de entrada enquanto o usuário digita.
     * @param {string} cpfId - O ID do campo de entrada de CPF.
     */
    function formatarCPFAoDigitar(cpfId) {
        let input = $("#" + cpfId).val();
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
        $("#" + cpfId).val(cpfFormatado);
    }

    /**
     * Valida um CPF inserido em um campo de entrada.
     * @param {string} cpfId - O ID do campo de entrada de CPF.
     */
    function validarCPF(cpfId) {
        let cpf = $("#" + cpfId).val(); // Obtém o valor do campo de CPF com o ID fornecido

        if (cpf.length != 14) {
            exibirErro(cpfId, "CPF inválido! Precisa ter 11 números.");
        } else if (!verificaCPF(cpf)) {
            exibirErro(cpfId, "CPF inválido!");
        } else {
            exibirSucesso(cpfId, "CPF válido!");
        }

        if (cpf.length == 0) {
            exibirErro(cpfId, "Digite o CPF!");
        }
    }

    /**
     * Valida o CPF inserido em um campo de entrada ao perder o foco.
     * @param {string} cpfId - O ID do campo de entrada de CPF.
     */
    function adicionarEventoValidacaoCPF(cpfId) {
        // Adiciona um evento de validação quando o campo perde o foco
        $("#" + cpfId).blur(function () {
            validarCPF(cpfId);
        });
    }

    adicionarEventoValidacaoCPF("inputCpf"); // Chamando


    //------------------------------------ FIM Validar CPF -----------------------------------------


    //################################ INÍCIO Validar Email ########################################

    /**
     * Verifica se o e-mail não possui espaços em branco.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o e-mail não possuir espaços em branco, caso contrário, retorna falso.
     */
    function naoPossuiEspacos(email) {
        return !email.includes(' ');
    }

    /**
     * Verifica se o e-mail possui o símbolo @.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o e-mail possuir o símbolo @, caso contrário, retorna falso.
     */
    function possuiArroba(email) {
        return email.indexOf('@') !== -1;
    }

    /**
     * Verifica se há algum caractere antes do @ no e-mail.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se houver pelo menos um caractere antes do @, caso contrário, retorna falso.
     */
    function possuiCaracteresAntesArroba(email) {
        let partes = email.split('@');
        return partes[0].length > 0;
    }

    /**
     * Verifica se há algum caractere após o @ no e-mail.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se houver pelo menos um caractere após o @, caso contrário, retorna falso.
     */
    function possuiCaracteresAposArroba(email) {
        let partes = email.split('@');
        return partes[1].length > 0;
    }

    /**
     * Verifica se há pelo menos um ponto após o caractere depois do @ no e-mail.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se houver pelo menos um ponto após o caractere depois do @, caso contrário, retorna falso.
     */
    function possuiPontoAposCaracterDepoisArroba(email) {
        let partes = email.split('@');
        let parteDepoisDoArroba = partes[1];
        return parteDepoisDoArroba.indexOf('.') !== -1;
    }

    /**
     * Verifica se há pelo menos um caractere após o último ponto no e-mail.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se houver pelo menos um caractere após o último ponto, caso contrário, retorna falso.
     */
    function possuiCaractereAposUltimoPonto(email) {
        let partes = email.split('@');
        let parteDepoisDoArroba = partes[1];
        let partesDepoisDoPonto = parteDepoisDoArroba.split('.');
        let parteDepoisDoUltimoPonto = partesDepoisDoPonto[1];
        return parteDepoisDoUltimoPonto && parteDepoisDoUltimoPonto.length > 0;
    }

    /**
     * Verifica se o e-mail contém apenas caracteres permitidos.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o e-mail contiver apenas caracteres permitidos, caso contrário, retorna falso.
     */
    function possuiApenasCaracteresPermitidos(email) {
        let caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!#$%&\'*+/=?^_`{|}~-@';
        for (let char of email) {
            if (caracteresPermitidos.indexOf(char) === -1) {
                return false;
            }
        }
        return true;
    }

    /**
     * Verifica se o e-mail possui apenas um símbolo @.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o e-mail possuir apenas um símbolo @, caso contrário, retorna falso.
     */
    function possuiApenasUmArroba(email) {
        let count = 0;
        for (let char of email) {
            if (char === '@') {
                count++;
            }
        }
        return count === 1;
    }

    /**
     * Verifica se a parte do domínio do e-mail não contém pontos no meio.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se a parte do domínio do e-mail não possuir pontos no meio, caso contrário, retorna falso.
     */
    function naoPossuiPontosNoDominio(email) {
        let partes = email.split('@');
        if (partes.length !== 2) {
            return false; // O e-mail não possui um "@" válido
        }

        let dominio = partes[1];
        return dominio.indexOf('.') === dominio.lastIndexOf('.');
    }

    /**
     * Verifica se a parte do domínio do e-mail não contém caracteres inválidos.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se a parte do domínio do e-mail não contiver caracteres inválidos, caso contrário, retorna falso.
     */
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

    /**
     * Verifica se o tamanho do e-mail está dentro do limite máximo.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o tamanho do e-mail estiver dentro do limite máximo, caso contrário, retorna falso.
     */
    function tamanhoDentroDoLimite(email) {
        return email.length <= 254;
    }

    /**
 * Valida um endereço de e-mail.
 * @param {string} emailId - O ID do campo de entrada de e-mail.
 * @returns {boolean} Retorna verdadeiro se o e-mail for válido, caso contrário, retorna falso.
 */
    function validarEmail(emailId) {
        let email = $("#" + emailId).val().trim(); // Obtém o valor do campo de e-mail com o ID fornecido

        if (email == "") {
            exibirErro(emailId, "Digite o Email!");
            return false;
        }

        if (!naoPossuiEspacos(email)) {
            exibirErro(emailId, "E-mail não deve conter espaços.");
            return false;
        }

        if (!possuiArroba(email)) {
            exibirErro(emailId, "E-mail deve conter o símbolo @.");
            return false;
        }

        if (!possuiApenasUmArroba(email)) {
            exibirErro(emailId, "E-mail deve conter apenas um símbolo @.");
            return false;
        }

        if (!possuiCaracteresAntesArroba(email)) {
            exibirErro(emailId, "E-mail deve conter caracteres antes do @.");
            return false;
        }

        if (!possuiCaracteresAposArroba(email)) {
            exibirErro(emailId, "E-mail deve conter caracteres após o @.");
            return false;
        }

        if (!possuiPontoAposCaracterDepoisArroba(email)) {
            exibirErro(emailId, "E-mail deve conter pelo menos um ponto após o @.");
            return false;
        }
        if (!naoPossuiPontosNoDominio(email)) {
            exibirErro(emailId, "A parte do domínio do e-mail não deve conter pontos no meio.");
            return false;
        }

        if (!possuiCaractereAposUltimoPonto(email)) {
            exibirErro(emailId, "E-mail deve conter pelo menos um caractere após o último ponto.");
            return false;
        }

        if (!possuiApenasCaracteresPermitidos(email)) {
            exibirErro(emailId, "E-mail contém caracteres inválidos.");
            return false;
        }

        if (!tamanhoDentroDoLimite(email)) {
            exibirErro(emailId, "E-mail excede o limite máximo de caracteres.");
            return false;
        }

        if (!naoPossuiCaracteresInvalidosNoDominio(email)) {
            exibirErro(emailId, "A parte do domínio do e-mail contém caracteres inválidos.");
            return false;
        }
        exibirSucesso(emailId, "E-mail válido!");
        return true;
    }

    /**
     * Adiciona um evento de validação de e-mail a um campo de entrada de e-mail.
     * @param {string} emailId - O ID do campo de entrada de e-mail.
     */
    function adicionarEventoValidacaoEmail(emailId) {
        // Adiciona um evento de validação quando o campo perde o foco
        $("#" + emailId).blur(function () {
            validarEmail(emailId); // Chama a função de validação de e-mail com o ID do campo como argumento
        });
    }


    adicionarEventoValidacaoEmail("inputEmail"); //  Chamando
    adicionarEventoValidacaoEmail("inputEmailEmpresa"); //  Chamando

    //------------------------------------ FIM Validar Email -----------------------------------------


    //################################## INÍCIO Validar Telefone #########################################

    /**
     * Valida o número de telefone inserido no campo de entrada "#inputTelefone" ao perder o foco.
     */
    $("#inputTelefone").blur(function () {
        validarTelefone();
    });

    function validarTelefone() {
        let input = $("#inputTelefone").val();
        telefone = removerNaoNumericos(input);

        if (telefone.length == 0) {
            exibirErro("inputTelefone", "Digite o número de telefone!");
        } else if (telefone.length < 11) {
            exibirErro("inputTelefone", "Telefone inválido, menor que o permitido. Use o formato (xx) 9 xxxx-xxxx.");
        } else if (telefone.length > 11) {
            exibirErro("inputTelefone", "Telefone inválido, maior que o permitido. Use o formato (xx) 9 xxxx-xxxx.");
        } else {
            exibirSucesso("inputTelefone", "Telefone válido!");
        }
    }



    // Função para formatar o número de telefone enquanto o usuário digita
    function formatarTelefoneAoDigitar() {
        let input = $("#inputTelefone").val(); // Obtém o valor do campo de entrada
        let telefone = removerNaoNumericos(input); // Remove caracteres não numéricos do telefone
        let telefoneFormatado = ''; // Inicializa a variável para armazenar o telefone formatado

        // Limita o telefone a 11 dígitos se for maior
        if (telefone.length > 11) {
            telefone = telefone.substring(0, 11);
        }

        // Formata o telefone com parênteses, espaço e traço
        for (let i = 0; i < telefone.length; i++) {
            // Adiciona parênteses após o primeiro dígito
            if (i == 0) {
                telefoneFormatado += '(';
            }
            // Adiciona o fecha parênteses e um espaço após o segundo dígito
            else if (i == 2) {
                telefoneFormatado += ') ';
                if (telefone[2] != '9') { // Caso o usuário não tenha digitado o prefixo "9"
                    telefoneFormatado += '9 '; // Substitui o terceiro caractere por "9" e adiciona um espaço após
                }
            }
            // Adiciona um espaço após o terceiro dígito
            else if (i == 3) {
                telefoneFormatado += ' ';
            }
            // Adiciona um traço após o sétimo dígito
            else if (i == 7) {
                telefoneFormatado += '-';
            }
            // Adiciona o dígito atual ao telefone formatado
            telefoneFormatado += telefone[i];
        }

        // Define o telefone formatado no campo de entrada
        $("#inputTelefone").val(telefoneFormatado);
    }

    // Registra o evento "input" no campo de entrada do telefone e chama a função formatarTelefoneAoDigitar quando o evento é acionado
    $("#inputTelefone").on("input", formatarTelefoneAoDigitar);



    //------------------------------------ FIM Validar Telefone -----------------------------------------
    //############################## INÍCIO Validar CNPJ ################################################
    /**
        * Valida o número de telefone inserido no campo de entrada "#inputTelefone" ao perder o foco.
        */
    $("#inputCNPJ").blur(function () {
        validarCNPJ();
    });

    function validarCNPJ() {
        let input = $("#inputTelefone").val();
        cnpj = removerNaoNumericos(input);

        if (cnpj.length == 0) {
            exibirErro("inputCnpj", "Digite o número do CNPJ!");
        } else {
            exibirSucesso("inputCnpj", "CNPJ válido!");
        }
    }

    // Função para formatar o número de CNPJ enquanto o usuário digita
    function formatarCnpjAoDigitar() {
        let input = $("#inputCNPJ").val(); // Obtém o valor do campo de entrada
        let cnpj = removerNaoNumericos(input); // Remove caracteres não numéricos do CNPJ
        let cnpjFormatado = ''; // Inicializa a variável para armazenar o CNPJ formatado

        // Limita o CNPJ a 14 dígitos se for maior
        if (cnpj.length > 14) {
            cnpj = cnpj.substring(0, 14);
        }

        // Formata o CNPJ com pontos, barra e traço
        for (let i = 0; i < cnpj.length; i++) {
            // Adiciona ponto após o segundo e quinto dígitos
            if (i == 2 || i == 5) {
                cnpjFormatado += '.';
            }
            // Adiciona barra após o oitavo dígito
            else if (i == 8) {
                cnpjFormatado += '/';
            }
            // Adiciona traço após o décimo segundo dígito
            else if (i == 12) {
                cnpjFormatado += '-';
            }
            // Adiciona o dígito atual ao CNPJ formatado
            cnpjFormatado += cnpj[i];
        }

        // Define o CNPJ formatado no campo de entrada
        $("#inputCNPJ").val(cnpjFormatado);
    }

    // Registra o evento "input" no campo de entrada do CNPJ e chama a função formatarCnpjAoDigitar quando o evento é acionado
    $("#inputCNPJ").on("input", formatarCnpjAoDigitar);


    //------------------------------------ FIM Validar CNPJ -----------------------------------------

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

