var pacientes = document.querySelectorAll('.paciente');

console.log(paciente)

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    const tdPeso = paciente.querySelector('.info-peso');
    const tdAltura = paciente.querySelector('.info-altura');
    const tdImc = paciente.querySelector('.info-imc');

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida) {
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválido!!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso (peso) {
    if(peso >= 0 && peso <1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false; 
    }
}



