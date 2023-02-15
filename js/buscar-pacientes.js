var botaoAdicionar = document.querySelector("#buscar-pacientes");


botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"); //json = JavaScript Object Notation

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send();
});