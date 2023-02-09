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

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}



