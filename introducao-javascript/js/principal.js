var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaEhValida) {
        paciente.classList.add("paciente-invalido");
    }
    if (pesoEhValido && alturaEhValida) {
        tdImc.textContent = CalcularIMC(peso, altura);
    }
    else{
        tdImc.textContent = "Altura ou/e peso invalido";
    }
}


function CalcularIMC(peso,altura){
    var imc;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso <1000 && peso > 0 ){
        return true;
    }
    return false;
}
function validaAltura(altura){
    if(altura > 0 && altura <= 3.0){
        return true
    }
    return false
}
