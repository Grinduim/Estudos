var botao =  document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = MontarTr(paciente);   

    var erros =  validaPaciente(paciente);
    if(erros.length > 0){
        exibeErros(erros);
        return;
    }else{
        limpaErros();
    }
    document.querySelector("#tabela-pacientes").appendChild(pacienteTr);

    form.reset();
});

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: CalcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
};

function MontarTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var tdNome = MontaTd(paciente.nome, "info-nome");

    var tdPeso = MontaTd(paciente.peso, "info-peso");

    var tdAltura = MontaTd(paciente.altura, "info-altura");

    var tdGordura = MontaTd(paciente.gordura, "info-gordura");

    var tdImc = MontaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(tdNome);
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);
    pacienteTr.appendChild(tdGordura);
    pacienteTr.appendChild(tdImc);
 
    return pacienteTr;
}

function MontaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

 
function validaPaciente(paciente){
    var erros = []
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é invalido !")
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é invalido !")
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco !")
    }
    return erros
}


function exibeErros(erros){
    limpaErros()
    var ul = document.querySelector("#mensagem-erro")
    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro
        ul.appendChild(li);
    });
}

function limpaErros(){
    var ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = "";
}