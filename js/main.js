var paciente = document.querySelector('#primeiro-paciente');

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
    tdimc.textContent = imc;
}


