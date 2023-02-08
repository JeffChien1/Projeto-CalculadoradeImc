var pacientes = document.querySelectorAll('.paciente');

console.log(paciente)

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    const tdpeso = paciente.querySelector('.info-peso');
    const tdaltura = paciente.querySelector('.info-altura');
    const tdimc = paciente.querySelector('.info-imc');

    var peso = tdpeso.textContent;
    var altura = tdaltura.textContent;

    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso < 0 || peso >= 1000) {
        pesoEhValido = false;
        tdimc.textContent = "Peso Inválido!!"
    }
    
    if (altura < 0 || altura >= 3.00) {
        alturaEhValido = false;
        tdimc.textContent = "Altura Inválido!!"
    }
    
    if (alturaEhValido && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click', (event) => {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    var imc = peso / (altura * altura);

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc.toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

})

