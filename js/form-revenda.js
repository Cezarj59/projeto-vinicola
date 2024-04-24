
//################################## INÍCIO Funções Utilitárias ##################################

/**
 * @description Exibe uma mensagem de erro relacionada a um campo do formulário.
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
 * @description Exibe uma mensagem de sucesso relacionada a um campo do formulário.
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
 * @description Remove caracteres não numéricos de uma string.
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
* @description Capitaliza a primeira letra de cada palavra em uma frase.
* @param {string} frase - A frase a ser capitalizada.
* @returns {string} - A frase com a primeira letra de cada palavra capitalizada. Ex: Bom Dia.
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
 * @description Remove espaços extras de uma string.
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
 * @description Verifica se uma string contém números.
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
 * @description Verifica se uma string contém caracteres inválidos.
 * @param {string} str - A string a ser verificada.
 * @returns {boolean} - true se a string contiver caracteres inválidos, false caso contrário.
 */

function contemCaracteresInvalidos(str) {
    // Lista de caracteres válidos
    let alfabeto = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÁáÀàÃãÉéÈèÍíÌìÓóÒòÕõÚúÙùÜüÇç'0123456789";

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
 * @description Verifica se uma string contém mais de duas letras repetidas consecutivas.
 * @param {string} str - A string a ser verificada.
 * @returns {boolean} - true se a string contiver mais de duas letras repetidas consecutivas, false caso contrário.
 */
function contemLetrasRepetidas(str) {
    // Define a expressão regular para verificar letras repetidas consecutivas
    let regexRepetidas = /([a-zA-ZÀ-ú])\1{2,}/;

    // Verifica se a string contém letras repetidas consecutivas usando a expressão regular
    return regexRepetidas.test(str);
}


/**
 * @description Faz a formatação de um nome e atualiza o campo correspondente.
 * @param {string} nome - O nome completo a ser formatado.
 */
function formatarNome(nome) {
    nome = removerEspacosExtras(nome);
    nome = capitalizarPrimeiraLetra(nome);
    return nome;
}

/**
* @description Função genérica para atribuir validação ao perder foco em um elemento.
* @param {string} elementoId - O ID do elemento ao qual será atribuída a validação.
* @param {Function} validacaoFunction - A função de validação a ser chamada quando o elemento perde o foco.
*/
function atribuirValidacaoAoPerderFoco(elementoId, validacaoFunction) {
    // Atribui um evento de perda de foco ao elemento com o ID fornecido
    $("#" + elementoId).blur(() => {
        // Quando o elemento perde o foco, chama a função de validação correspondente
        validacaoFunction();
    });
}
/**
 * @description Função genérica para atribuir validação a cada entrada de texto em um elemento.
 * @param {string} elementoId - O ID do elemento ao qual será atribuída a validação.
 * @param {Function} validacaoFunction - A função de validação a ser chamada a cada entrada de texto no elemento.
 */
function atribuirValidacaoAEntradaDeTexto(elementoId, validacaoFunction) {
    // Atribui um evento de entrada de texto ao elemento com o ID fornecido
    $("#" + elementoId).on("input", () => {
        // Quando o elemento recebe uma entrada de texto, chama a função de validação correspondente
        validacaoFunction();
    });
}


//================================== FIM funções Utilitárias ==================================


/**
 * @description função em jQuery que é executada quando o documento HTML foi completamente carregado e pronto para ser manipulado.
 */
$(document).ready(function () {

    //################################## INÍCIO Validar Nome ##################################

    /**
  * @description Valida o comprimento dos nomes e sobrenomes.
  * @param {string} nome - O nome completo a ser validado.
  * @param {string} nomeCampo - O ID do campo do formulário associado ao nome, usado para exibir mensagens de erro.
  * @param {string} mensagemErro - A mensagem de erro a ser exibida se o nome não atender aos critérios de validação.
  * @returns {boolean} - true se o nome atender aos critérios de validação, false caso contrário.
  */
    function validarComprimentoNomes(nome, nomeCampo, mensagemErro) {
        // Divide o nome em um vetor de partes separadas por espaços
        let vetorNomes = nome.split(" ");

        if (vetorNomes.length == 1) {
            // Se houver apenas uma parte no nome, exibe uma mensagem de erro e retorna false
            exibirErro(nomeCampo, mensagemErro || "Digite o nome completo!");
            return false;
        } else if (vetorNomes.length == 2 || vetorNomes.length == 3) {
            // Se houver duas ou três partes no nome, captura o primeiro e o último nome
            let primeiroNome = vetorNomes[0];
            let ultimoNome = vetorNomes[vetorNomes.length - 1];

            // Verifica se o primeiro ou o último nome têm menos de 3 caracteres e exibe uma mensagem de erro, se aplicável
            if (primeiroNome.length < 3 || ultimoNome.length < 3) {
                exibirErro(nomeCampo, "O primeiro e ultimo nome devem ter no mínimo 3 caracteres!");
                return false;
            }
        } else if (vetorNomes.length > 3) {
            // Se houver mais de três partes no nome
            // Captura o primeiro, os nomes do meio e o último nome
            let primeiroNome = vetorNomes[0];
            let nomeDoMeio = vetorNomes.slice(1, vetorNomes.length - 1).join(' '); // Combina todos os nomes do meio em uma única string
            let ultimoNome = vetorNomes[vetorNomes.length - 1];

            // Verifica se o primeiro ou o último nome têm menos de 3 caracteres e exibe uma mensagem de erro, se aplicável
            if (primeiroNome.length < 3 || ultimoNome.length < 3) {
                exibirErro(nomeCampo, "O primeiro e ultimo nome devem ter no mínimo 3 caracteres!");
                return false;
            }
        }
        // Se nenhum erro for encontrado, retorna true
        return true;
    }


    /**
  * @description Valida um nome simples digitado em um campo do formulário.
  * @param {string} nomeCampo - O ID do campo do formulário que contém o nome a ser validado.
  * @param {boolean} permiteNumeros - Indica se números são permitidos no nome.
  * @param {string} mensagemErro - A mensagem de erro a ser exibida se o campo estiver vazio.
  * @returns {boolean} - true se o nome for válido, false caso contrário.
  */
    function validaNomeSimples(nomeCampo, permiteNumeros, mensagemErro) {
        let nome = $(`#${nomeCampo}`).val().trim();

        // Verifica se o campo está vazio
        if (nome.length == 0) {
            exibirErro(nomeCampo, mensagemErro || "Digite o Nome!"); // Usa a mensagem personalizada se fornecida, senão usa a mensagem padrão
            return false; // Retorna false indicando erro
        } else if (nome.length < 3) {
            exibirErro(nomeCampo, "O nome deve ter no mínimo 3 caracteres!"); // Exibe mensagem de erro se o nome tiver menos de 3 caracteres
            return false; // Retorna false indicando erro
        } else if (!permiteNumeros && contemNumero(nome)) {
            exibirErro(nomeCampo, "Números não são permitidos neste campo!"); // Exibe mensagem de erro se números não forem permitidos e o nome contiver números
            return false; // Retorna false indicando erro
        } else if (contemLetrasRepetidas(nome)) {
            // Verifica se números não são permitidos e o nome contém letras repetidas
            exibirErro(nomeCampo, "Não deve conter letras repetidas neste campo!");
            return false; // Retorna false indicando erro
        } else if (contemCaracteresInvalidos(nome)) {
            exibirErro(nomeCampo, "Caracteres especiais não são permitidos neste campo!"); // Exibe mensagem de erro se o nome contiver caracteres especiais
            return false; // Retorna false indicando erro
        }
        // Formata o nome e exibe mensagem de sucesso
        $(`#${nomeCampo}`).val(formatarNome(nome)); // Define o valor do campo com o nome formatado
        exibirSucesso(nomeCampo, "Ok!"); // Exibe a mensagem de sucesso se a validação for bem-sucedida

        return true; // Retorna true indicando sucesso
    }

    /**
  * @description Valida um nome completo digitado em um campo do formulário.
  * @param {string} nomeCampo - O ID do campo do formulário que contém o nome a ser validado.
  * @param {boolean} permiteNumeros - Indica se números são permitidos no nome.
  * @param {string} mensagemErro - A mensagem de erro a ser exibida se o campo estiver vazio.
  * @returns {boolean} - true se o nome for válido, false caso contrário.
  */
    function validaNome(nomeCampo, permiteNumeros, mensagemErro) {
        let nome = $(`#${nomeCampo}`).val().trim();


        // Verifica se o campo está vazio
        if (nome.length == 0) {
            exibirErro(nomeCampo, mensagemErro || "Digite o Nome!"); // Usa a mensagem personalizada se fornecida, senão usa a mensagem padrão
            return false; // Retorna false indicando erro
        } else if (contemCaracteresInvalidos(nome)) {
            // Verifica se o nome contém caracteres inválidos
            exibirErro(nomeCampo, "Não deve conter caracteres inválidos!");
            return false; // Retorna false indicando erro
        } else if (!permiteNumeros && contemNumero(nome)) {
            // Verifica se números não são permitidos e o nome contém números
            exibirErro(nomeCampo, "Números não são permitidos neste campo!");
            return false; // Retorna false indicando erro
        } else if (contemLetrasRepetidas(nome)) {
            // Verifica se números não são permitidos e o nome contém letras repetidas
            exibirErro(nomeCampo, "Não deve conter letras repetidas neste campo!");
            return false; // Retorna false indicando erro
        } else if (!validarComprimentoNomes(nome, nomeCampo)) {
            // Valida o comprimento dos nomes e sobrenomes
            return false; // Retorna false indicando erro
        }

        // Formata o nome e exibe mensagem de sucesso
        $(`#${nomeCampo}`).val(formatarNome(nome)); // Define o valor do campo com o nome formatado
        exibirSucesso(nomeCampo, "Nome Válido!"); // Exibe a mensagem de sucesso se a validação de comprimento for bem-sucedida

        return true; // Retorna true indicando sucesso
    }

    //================================== FIM Validar Nome ==================================
    //################################## INÍCIO Validar CPF ##################################
    /**
     * @description Verifica se um CPF é válido.
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
     * @description Formata o CPF em um campo de entrada enquanto o usuário digita.
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
    atribuirValidacaoAEntradaDeTexto("inputCpf", () => formatarCPFAoDigitar("inputCpf"));


    /**
  * @description Valida um CPF inserido em um campo de entrada.
  * @param {string} cpfId - O ID do campo de entrada de CPF.
  * @returns {boolean} - Retorna true se o CPF for válido, caso contrário retorna false.
  */
    function validarCPF(cpfId) {
        let cpf = $("#" + cpfId).val(); // Obtém o valor do campo de CPF com o ID fornecido

        if (cpf.length == 0) {
            exibirErro(cpfId, "Digite o CPF!");
            return false;
        } else if (cpf.length != 14) {
            exibirErro(cpfId, "CPF inválido! Precisa ter 11 números.");
            return false;
        } else if (!verificaCPF(cpf)) {
            exibirErro(cpfId, "CPF inválido!");
            return false;
        } else {
            exibirSucesso(cpfId, "CPF válido!");
            return true;
        }
    }



    //================================== FIM Validar CPF ==================================


    //################################## INÍCIO Validar Email ##################################

    /**
     * @description Verifica se o e-mail não possui espaços em branco.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o e-mail não possuir espaços em branco, caso contrário, retorna falso.
     */
    function naoPossuiEspacos(email) {
        return !email.includes(' ');
    }

    /**
     * @description Verifica se o e-mail possui o símbolo @.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o e-mail possuir o símbolo @, caso contrário, retorna falso.
     */
    function possuiArroba(email) {
        return email.indexOf('@') !== -1;
    }

    /**
     * @description Verifica se há algum caractere antes do @ no e-mail.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se houver pelo menos um caractere antes do @, caso contrário, retorna falso.
     */
    function possuiCaracteresAntesArroba(email) {
        let partes = email.split('@');
        return partes[0].length > 0;
    }

    /**
     * @description Verifica se há algum caractere após o @ no e-mail.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se houver pelo menos um caractere após o @, caso contrário, retorna falso.
     */
    function possuiCaracteresAposArroba(email) {
        let partes = email.split('@');
        return partes[1].length > 0;
    }

    /**
     * @description Verifica se há pelo menos um ponto após o caractere depois do @ no e-mail.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se houver pelo menos um ponto após o caractere depois do @, caso contrário, retorna falso.
     */
    function possuiPontoAposCaracterDepoisArroba(email) {
        let partes = email.split('@');
        let parteDepoisDoArroba = partes[1];
        return parteDepoisDoArroba.indexOf('.') !== -1;
    }

    /**
     * @description Verifica se há pelo menos um caractere após o último ponto no e-mail.
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
     * @description Verifica se o e-mail contém apenas caracteres permitidos.
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
     * @description Verifica se o e-mail possui apenas um símbolo @.
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
     * @description Verifica se a parte do domínio do e-mail não contém pontos no meio.
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
     * @description Verifica se a parte do domínio do e-mail não contém caracteres inválidos.
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
     * @description Verifica se o tamanho do e-mail está dentro do limite máximo.
     * @param {string} email - O endereço de e-mail a ser verificado.
     * @returns {boolean} Retorna verdadeiro se o tamanho do e-mail estiver dentro do limite máximo, caso contrário, retorna falso.
     */
    function tamanhoDentroDoLimite(email) {
        return email.length <= 254;
    }

    /**
    * @description Valida um endereço de e-mail.
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



    //================================== FIM Validar Email ==================================

    //################################## INÍCIO Validar Telefone ##################################

    /**
  * @description Valida um número de telefone inserido em um campo de entrada.
  * @param {string} telefoneId - O ID do campo de entrada de telefone.
  * @returns {boolean} - Retorna true se o telefone for válido, caso contrário retorna false.
  */
    function validarTelefone(telefoneId) {
        let input = $("#" + telefoneId).val();
        let telefone = removerNaoNumericos(input);

        if (telefone.length == 0) {
            exibirErro(telefoneId, "Digite o número de telefone!");
            return false;
        } else if (telefone.length < 11) {
            exibirErro(telefoneId, "Telefone inválido, menor que o permitido. Use o formato (xx) 9 xxxx-xxxx.");
            return false;
        } else if (telefone.length > 11) {
            exibirErro(telefoneId, "Telefone inválido, maior que o permitido. Use o formato (xx) 9 xxxx-xxxx.");
            return false;
        } else {
            exibirSucesso(telefoneId, "Telefone válido!");
            return true;
        }
    }


    /**
     * @description Formata o número de telefone em um campo de entrada enquanto o usuário digita.
     * @param {string} telefoneId - O ID do campo de entrada de telefone.
     */
    function formatarTelefoneAoDigitar(telefoneId) {
        let input = $("#" + telefoneId).val();
        let telefone = removerNaoNumericos(input);
        let telefoneFormatado = '';

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
        $("#" + telefoneId).val(telefoneFormatado);
    }

    // Chama a função formatarTelefoneAoDigitar a cada entrada de texto
    atribuirValidacaoAEntradaDeTexto("inputTelefone", () => formatarTelefoneAoDigitar("inputTelefone"));
    atribuirValidacaoAEntradaDeTexto("inputTelefoneEmpresa", () => formatarTelefoneAoDigitar("inputTelefoneEmpresa"));
    atribuirValidacaoAEntradaDeTexto("inputTelefoneEntrega", () => formatarTelefoneAoDigitar("inputTelefoneEntrega"));

    //================================== FIM Validar Telefone ==================================

    //---------------------------------- 2. Validações dos campos Dados Empresariais ----------------------------------
    //################################## INÍCIO Validar CNPJ ##################################

    /**
     * @description Valida um número de CNPJ inserido em um campo de entrada.
     * @param {string} cnpjId - O ID do campo de entrada de CNPJ.
     * @returns {boolean} - Retorna true se o CNPJ for válido, caso contrário retorna false.
     */
    function validarCNPJ(cnpjId) {
        let input = $("#" + cnpjId).val();
        let cnpj = removerNaoNumericos(input);

        if (cnpj.length == 0) {
            exibirErro(cnpjId, "Digite o número do CNPJ!");
            return false;
        } else if (todosDigitosCnpjIguais(cnpj)) {
            exibirErro(cnpjId, "CNPJ inválido! Todos os dígitos são iguais.");
            return false;
        } else {
            exibirSucesso(cnpjId, "CNPJ válido!");
            return true;
        }
    }


    /**
     * @description Verifica se todos os dígitos de um CNPJ são iguais.
     * @param {string} cnpj - O CNPJ a ser verificado.
     * @returns {boolean} - true se todos os dígitos forem iguais, false caso contrário.
     */
    function todosDigitosCnpjIguais(cnpj) {
        const primeiroDigito = cnpj[0];
        for (let i = 1; i < cnpj.length; i++) {
            if (cnpj[i] !== primeiroDigito) {
                return false;
            }
        }
        return true;
    }

    /**
     * @description Formata o número de CNPJ em um campo de entrada enquanto o usuário digita.
     * @param {string} cnpjId - O ID do campo de entrada de CNPJ.
     */
    function formatarCnpjAoDigitar(cnpjId) {
        let input = $("#" + cnpjId).val(); // Obtém o valor do campo de entrada
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
        $("#" + cnpjId).val(cnpjFormatado);
    }

    // Chama a função formatarCnpjAoDigitar a cada entrada de texto
    atribuirValidacaoAEntradaDeTexto("inputCNPJ", () => formatarCnpjAoDigitar("inputCNPJ"));

    //================================== FIM Validar CNPJ ===================================


    //################################## INÍCIO Validar Numero ##################################

    /**
    * @description Verifica se um campo de entrada contém um valor válido de acordo com o padrão especificado.
    * @param {string} campoId - O ID do campo de entrada.
    * @returns {boolean} - true se o campo estiver no formato válido, false caso contrário.
    */
    function validarNumero(campoId) {
        // Obtém o valor do campo de entrada
        const valorCampo = $("#" + campoId).val().trim();

        // Verifica se o campo está vazio
        if (valorCampo === "") {
            exibirErro(campoId, "Digite o número!");
            return false;
        }

        // Define a expressão regular para validar o campo
        const padrao = /^\d{1,4}[a-zA-Z]?$/;

        // Verifica se o valor do campo corresponde ao padrão
        if (!padrao.test(valorCampo)) {
            exibirErro(campoId, "O campo deve conter até 4 dígitos seguidos de uma letra opcional.");
            return false;
        } else {
            exibirSucesso(campoId, "Número válido.");
            return true;
        }
    }


    //================================== FIM Validar Numero ==================================

    //################################## INÍCIO Validar UF ##################################

    /** 
     * @description Adiciona um evento de validação ao campo UF
     */
    $("#uf").blur(function () {
        let uf = $(this).val(); // Obtém o valor do campo UF
        if (uf != "") {
            exibirSucesso("uf", "UF Válida!");
        }
    });

    //================================== FIM Validar UF ==================================

    //################################## INÍCIO Formata CEP ##################################
    /**
    * @description Formata o número de CEP em um campo de entrada enquanto o usuário digita.
    * @param {string} cepId - O ID do campo de entrada de CEP.
    */
    function formatarCepAoDigitar(cepId) {
        $("#" + cepId).on("input", function () {
            let cep = $("#" + cepId).val().replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            let cepFormatado = '';

            // Limita o CEP a 8 dígitos se for maior
            if (cep.length > 8) {
                cep = cep.substring(0, 8);
            }

            // Formata o CEP com traço
            for (let i = 0; i < cep.length; i++) {
                // Adiciona o traço após o quinto dígito
                if (i == 5) {
                    cepFormatado += '-';
                }
                // Adiciona o dígito atual ao CEP formatado
                cepFormatado += cep[i];
            }

            // Define o CEP formatado no campo de entrada
            $("#" + cepId).val(cepFormatado);
        });
    }

    // Formata o CEP enquanto o usuário digita no campo de CEP Entrega
    formatarCepAoDigitar("cep");

    // Formata o CEP enquanto o usuário digita no campo de CEP da empresa
    formatarCepAoDigitar("inputCepEmpresa");


    //================================== FIM Validar CEP ==================================

    //################################## INÍCIO Consumo API Viacep ##################################

    /**
     * @description Função para buscar o endereço a partir de um CEP e preencher campos de endereço correspondentes.
     * @param {string} cepId - O ID do campo de entrada de CEP.
     * @param {string} ruaId - O ID do campo de entrada de rua.
     * @param {string} bairroId - O ID do campo de entrada de bairro.
     * @param {string} cidadeId - O ID do campo de entrada de cidade.
     * @param {string} ufId - O ID do campo de entrada de UF.
     */
    function buscarEnderecoPorCEP(cepId, ruaId, bairroId, cidadeId, ufId) {
        // Obtém o valor do CEP e remove caracteres não numéricos
        let input = $("#" + cepId).val();
        let cep = removerNaoNumericos(input);

        // Verifica se o campo de CEP possui um valor informado
        if (cep != "") {
            // Expressão regular para validar o CEP
            var validacep = /^[0-9]{8}$/;

            // Valida o formato do CEP
            if (validacep.test(cep)) {
                // Preenche os campos com "..." enquanto consulta o webservice
                $("#" + ruaId).val("...");
                $("#" + bairroId).val("...");
                $("#" + cidadeId).val("...");
                $("#" + ufId).val("...");

                // Consulta o webservice viacep.com.br
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
                    if (!("erro" in dados)) {
                        // Atualiza os campos com os valores da consulta
                        $("#" + ruaId).val(dados.logradouro).trigger("blur");//trigger aciona manualmente o evento "blur" para verificar o campo
                        $("#" + bairroId).val(dados.bairro).trigger("blur");
                        $("#" + cidadeId).val(dados.localidade).trigger("blur");
                        $("#" + ufId).val(dados.uf).trigger("blur");
                        exibirSucesso(cepId, "CEP válido!")
                    } else {
                        // CEP pesquisado não foi encontrado
                        limparCamposEndereco(ruaId, bairroId, cidadeId, ufId);
                        alert("CEP não encontrado.");
                        exibirErro(cepId, "CEP não encontrado.")
                    }
                });
            } else {
                // CEP inválido
                limparCamposEndereco(ruaId, bairroId, cidadeId, ufId);
                alert("Formato de CEP inválido.");
                exibirErro(cepId, "Formato de CEP inválido.");
            }
        } else {
            // CEP sem valor, limpa os campos de endereço
            limparCamposEndereco(ruaId, bairroId, cidadeId, ufId);
            exibirErro(cepId, "Digite o CEP!")
        }
    }

    /**
     * @description Limpa os campos de endereço.
     * @param {string} ruaId - O ID do campo de entrada de rua.
     * @param {string} bairroId - O ID do campo de entrada de bairro.
     * @param {string} cidadeId - O ID do campo de entrada de cidade.
     * @param {string} ufId - O ID do campo de entrada de UF.
     */
    function limparCamposEndereco(ruaId, bairroId, cidadeId, ufId) {
        $("#" + ruaId).val("").trigger("blur");
        $("#" + bairroId).val("").trigger("blur");
        $("#" + cidadeId).val("").trigger("blur");
        $("#" + ufId).val("").trigger("blur");
    }


    //================================== FIM Consumo API Viacep ==================================

    //################################## INÍCIO Chamada das Validações ##################################

    // Seção: Validação de dados pessoais
    atribuirValidacaoAoPerderFoco("inputNome", () => validaNome("inputNome", false));// Validação para nome pessoal, sem números
    atribuirValidacaoAoPerderFoco("inputCpf", () => validarCPF("inputCpf"));
    atribuirValidacaoAoPerderFoco("inputEmail", () => validarEmail("inputEmail"));
    atribuirValidacaoAoPerderFoco("inputTelefone", () => validarTelefone("inputTelefone"));

    // Seção: Validação de dados empresariais
    atribuirValidacaoAoPerderFoco("inputNomeEmpresa", () => validaNomeSimples("inputNomeEmpresa", true, "Digite o Nome da Empresa!")); // Mensagem personalizada para o campo de nome da empresa
    atribuirValidacaoAoPerderFoco("inputCNPJ", () => validarCNPJ("inputCNPJ"));
    atribuirValidacaoAoPerderFoco("inputEmailEmpresa", () => validarEmail("inputEmailEmpresa"));
    atribuirValidacaoAoPerderFoco("inputTelefoneEmpresa", () => validarTelefone("inputTelefoneEmpresa"));
    atribuirValidacaoAoPerderFoco("inputCepEmpresa", () => buscarEnderecoPorCEP("inputCepEmpresa", "inputRuaEmpresa", "inputBairroEmpresa", "inputCidadeEmpresa", "inputUfEmpresa"));
    atribuirValidacaoAoPerderFoco("inputRuaEmpresa", () => validaNome("inputRuaEmpresa", true, "Digite o Nome da Rua para Entrega!"));// Validação para nome de rua, permitindo números    
    atribuirValidacaoAoPerderFoco("inputNumero", () => validarNumero("inputNumero"));

    // Seção: Validação de dados para entrega
    atribuirValidacaoAoPerderFoco("inputNomeEntrega", () => validaNome("inputNomeEntrega", false, "Digite o Nome de quem receberá a Entrega!")); // Validação para nome pessoal, sem números
    atribuirValidacaoAoPerderFoco("rua", () => validaNome("rua", true, "Digite o Nome da Rua para Entrega!"));// Validação para nome de rua, permitindo números
    atribuirValidacaoAoPerderFoco("inputTelefoneEntrega", () => validarTelefone("inputTelefoneEntrega"));
    atribuirValidacaoAoPerderFoco("inputTelefoneEntrega", () => formatarTelefoneAoDigitar("inputTelefoneEntrega"));
    atribuirValidacaoAoPerderFoco("cidade", () => validaNomeSimples("cidade", false, "Digite o Nome da Cidade!"));
    atribuirValidacaoAoPerderFoco("bairro", () => validaNomeSimples("bairro", false, "Digite o Nome da Bairro!"));
    atribuirValidacaoAoPerderFoco("inputNumeroEntrega", () => validarNumero("inputNumeroEntrega"));
    atribuirValidacaoAoPerderFoco("cep", () => buscarEnderecoPorCEP("cep", "rua", "bairro", "cidade", "uf"));

    //================================== FIM Chamada das  Validações ==================================


    //################################## INÍCIO Evento de submissão do formulário ##################################
    $("#formularioRevenda").submit(function (event) {
        // Define uma variável para controlar se o formulário pode ser enviado
        let formValido = true;

        // Verifica qual opção do rádio está selecionada
        const tipoCliente = $("input[name='radiosTipoCliente']:checked").val();

        // Se o tipo de cliente for Pessoa Jurídica (valor '2'), valida todos os campos
        if (tipoCliente === '2') {
            // Validação dos campos de dados pessoais
            formValido = validaNome("inputNome", false) && formValido;
            console.log("Nome válido:", formValido);

            formValido = validarCPF("inputCpf") && formValido;
            console.log("CPF válido:", formValido);

            formValido = validarEmail("inputEmail") && formValido;
            console.log("Email válido:", formValido);

            formValido = validarTelefone("inputTelefone") && formValido;
            console.log("Telefone válido:", formValido);

            // Validação dos campos de dados empresariais
            formValido = validaNomeSimples("inputNomeEmpresa", true, "Digite o Nome da Empresa!") && formValido;
            console.log("Nome da Empresa válido:", formValido);

            formValido = validarCNPJ("inputCNPJ") && formValido;
            console.log("CNPJ válido:", formValido);

            formValido = validarEmail("inputEmailEmpresa") && formValido;
            console.log("Email da Empresa válido:", formValido);

            formValido = validarTelefone("inputTelefoneEmpresa") && formValido;
            console.log("Telefone da Empresa válido:", formValido);

            formValido = validaNome("inputRuaEmpresa", true, "Digite o Nome da Rua!") && formValido;
            console.log("Rua da Empresa válida:", formValido);

            formValido = validaNome("rua", true, "Digite o Nome da Rua para Entrega!") && formValido;
            console.log("Rua para Entrega válida:", formValido);

            // Validação dos campos de dados de entrega
            formValido = validaNome("inputNomeEntrega", false, "Digite o Nome de quem receberá a Entrega!") && formValido;
            console.log("Nome para Entrega válido:", formValido);

            formValido = validarTelefone("inputTelefoneEntrega") && formValido;
            console.log("Telefone para Entrega válido:", formValido);

            formValido = validaNome("rua", true, "Digite o Nome da Rua para Entrega!") && formValido;
            console.log("Rua para Entrega válida:", formValido);

            formValido = validarNumero("inputNumeroEntrega") && formValido;
            console.log("Número para Entrega válido:", formValido);
        } else {
            // Se o tipo de cliente for Pessoa Física, apenas valida os campos pessoais
            formValido = validaNome("inputNome", false) && formValido;
            console.log("Nome válido:", formValido);

            formValido = validarCPF("inputCpf") && formValido;
            console.log("CPF válido:", formValido);

            formValido = validarEmail("inputEmail") && formValido;
            console.log("Email válido:", formValido);

            formValido = validarTelefone("inputTelefone") && formValido;
            console.log("Telefone válido:", formValido);

            // Validação dos campos de dados de entrega
            formValido = validaNome("inputNomeEntrega", false, "Digite o Nome de quem receberá a Entrega!") && formValido;
            console.log("Nome para Entrega válido:", formValido);

            formValido = validarTelefone("inputTelefoneEntrega") && formValido;
            console.log("Telefone para Entrega válido:", formValido);

            formValido = validaNome("rua", true, "Digite o Nome da Rua para Entrega!") && formValido;
            console.log("Rua para Entrega válida:", formValido);

            formValido = validarNumero("inputNumeroEntrega") && formValido;
            console.log("Número para Entrega válido:", formValido);
        }

        // Validação do campo de observações (opcional)
        const observacoes = $("#textareaOBS").val().trim();
        if (observacoes.length > 0 && observacoes.length < 10) {
            exibirErro("#textareaOBS", "As observações devem ter pelo menos 10 caracteres!");
            formValido = false;
        }

        // Se o formulário não for válido, impede o envio
        if (!formValido) {
            event.preventDefault(); // Impede o envio do formulário
            alert("Existem campos inválidos. Por favor, verifique novamente."); // Alerta o usuário sobre campos inválidos
        }
    });
    //================================== FIM Evento de submissão do formulário ==================================

});

