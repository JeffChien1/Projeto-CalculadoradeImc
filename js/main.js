var paciente = document.querySelector('#primeiro-paciente');

const tdpeso = paciente.querySelector('.info-peso');
const tdaltura = paciente.querySelector('.info-altura');
const tdimc = paciente.querySelector('.info-imc');

var peso = tdpeso.textContent;
var altura = tdaltura.textContent;
var imc = peso / (altura * altura);

tdimc.textContent = imc;