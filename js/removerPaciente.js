var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.remove();
    
})


//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//       console.log(paciente);
//        this.remove();
//    })
//})