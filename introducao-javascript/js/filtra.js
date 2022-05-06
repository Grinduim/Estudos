var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 1 ){
        for(var i = 0 ; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;
            if(nome.toUpperCase() != this.value.toUpperCase()){
                paciente.classList.add("invisivel");
            }
            else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i< pacientes; i++){
            paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }
    
    
})