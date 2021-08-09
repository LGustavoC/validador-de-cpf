console.log('Js carregar');

function validacao(){
    console.log("Iniciando validacao CPF");
    
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var resultadoValidacao = validaCPF(cpf);
    
    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
        
    }
}

function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {

        var numeros = cpf.substring(0, 9)
        var digitos = cpf.substring(9);

        var soma = 0;

        for (i=10; i>1; i--){
            soma += numeros.charAt(10 - i) * i;
        }

        console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        //Validacao do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        //console.log(digitos.toString().charAt(0) + " é a primeira posicao da variavel soma")
        /*console.log('numero do cpf '+ numeros);
        console.log('digito do cpf '+ digitos);*/

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1.; k--){
            soma += numeros.charAt(11 - k) * k;
        }
        
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validacao do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}
