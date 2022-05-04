var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);
console.log('antes do for')
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var ValorAltura = paciente.querySelector('.info-altura').textContent;
    var ValorPeso = paciente.querySelector('.info-peso').textContent;
    var ValorIMC = paciente.querySelector('.info-imc');

    var PesoEhValido = true;
    var AlturaEhValida = true;

    if (ValorPeso <= 0 || ValorPeso >= 1000) {
        PesoEhValido = false;
    }
    if (ValorAltura <= 0 && ValorAltura >= 3.00) {
        AlturaEhValida = false;
    }

    if (AlturaEhValida && PesoEhValido) {
        var IMC = ValorPeso / (ValorAltura * ValorAltura);
        ValorIMC.textContent = IMC.toFixed(2);
    }
    else {
        ValorIMC.textContent ="Peso ou/e Altura inválido";
        paciente.classList.add('paciente-invalido');
    }

}


