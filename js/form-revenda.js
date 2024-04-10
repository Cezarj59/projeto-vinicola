$(document).ready(function () {



    function validarNome() {


    }
















    function removerEspacosExtras(str) {
        while (str.includes("  ")) {
            str = str.replace("  ", " ");
        }
        return str;
    }

    //################################## Validar CPF #########################################


    $("#inputCpfRevendedor").blur(function () {
        let cpf = $("#inputCpfRevendedor").val();

        if (cpf.length != 14) {
            $("#inputCpfRevendedor").css("border", "1px solid #f00");
            $("#cpfHelpBlock").removeClass("text-muted");
            $("#cpfHelpBlock").addClass("text-danger");
            $("#cpfHelpBlock").html("CPF inválido! Precisa ter 11 números.")
        } else {
            $("#cpfHelpBlock").removeClass("text-muted");
            $("#cpfHelpBlock").removeClass("text-danger");
            $("#cpfHelpBlock").addClass("text-success");
            $("#cpfHelpBlock").html("Ok!")
        }

        if(cpf.length == 0){
            $("#cpfHelpBlock").removeClass("text-danger");
            $("#cpfHelpBlock").addClass("text-muted");
            $("#cpfHelpBlock").html("Ex: 000.000.000-00")
        }
    });

    function removerNaoNumericos(string) {

        let resultado = "";

        for (let i = 0; i < string.length; i++) {
            // Obtém o caractere atual da posição 'i'
            const caractere = string[i];

            // Verifica se o caractere atual é um número e não é um espaço em branco
            if (!isNaN(caractere) && caractere !== " ") {
                // Se for um número, concatena-o à string de resultado
                resultado += caractere;
            }
        }

        // Retorna a string resultante contendo apenas caracteres numéricos
        return resultado;
    }


    
    function alterarInput() {
        // Obtém o valor do input com id "inputCpfRevendedor"
        let input = $("#inputCpfRevendedor").val();

        // Remove caracteres não numéricos do CPF
        let cpf = removerNaoNumericos(input);

        // Inicializa uma string para armazenar o CPF formatado
        let cpfFormatado = '';

        // Itera sobre cada caractere do CPF
        for (let i = 0; i < cpf.length; i++) {
            // Adiciona um ponto após o terceiro e o sexto dígitos do CPF
            if (i == 3 || i == 6) {
                cpfFormatado += '.';
            }
            // Adiciona um hífen após o nono dígito do CPF
            else if (i == 9) {
                cpfFormatado += '-';
            }
            // Concatena o dígito atual ao CPF formatado
            cpfFormatado += cpf[i];
        }

        // Define o valor do input com id "inputCpfRevendedor" como o CPF formatado
        $("#inputCpfRevendedor").val(cpfFormatado);
    }

    // Registra o evento "input" no input com id "inputCpfRevendedor" e chama a função alterarInput quando o evento é acionado
    $("#inputCpfRevendedor").on("input", alterarInput);










    //############################## Consumo API Viacep ######################################
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }

    //Quando o campo cep perde o foco.
    $("#cep").blur(function () {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#complemento").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ddd").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#complemento").val(dados.complemento);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ddd").val(dados.ddd);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
    //-------------------------------------------------------------------------------------
});

