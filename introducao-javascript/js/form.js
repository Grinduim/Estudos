var botao =  document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = MontarTr(paciente);   

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

    var tdAltura = montaTd(paciente.altura, "info-altura");

    var tdGordura = montaTd(paciente.gordura, "info-gordura");

    var tdImc = montaTd(paciente.imc, "info-imc");

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
