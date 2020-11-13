function meuEscopo() {

    const form = document.querySelector('.myForm');
    const resultadoFinal = document.querySelector('.resultadoFinal');

    function recebeEvento(evento, peso, altura) {
        evento.preventDefault();

        const inputPeso = document.querySelector('#peso');
        const inputAltura = document.querySelector('#altura');

        peso = inputPeso.value;
        altura = inputAltura.value;

        function calculoImc() {
            let imc = peso / (altura/100*altura/100);

            
            if(imc <= 18.5) {
                return resultadoFinal.innerHTML = (`IMC: ${imc.toFixed(1)} - Abaixo do peso`);
            }
            else if(imc <= 24.9) {
                return resultadoFinal.innerHTML = (`IMC: ${imc.toFixed(1)} - Peso normal`);
            }
            else if(imc <= 29.9) {
                return resultadoFinal.innerHTML = (`IMC: ${imc.toFixed(1)} - Sobrepeso`);
            }
            else if(imc <= 34.9) {
                return resultadoFinal.innerHTML = (`IMC: ${imc.toFixed(1)} - Obesidade grau 1`);
            }
            else if(imc <= 39.9) {
                return resultadoFinal.innerHTML = (`IMC: ${imc.toFixed(1)} - Obesidade grau 2`);
            }
            else {
                return resultadoFinal.innerHTML = (`IMC: ${imc.toFixed(1)} - Obesidade grau 3`);
            }
        }

        console.log(calculoImc());
        
    }
    
    console.log(peso, altura);

    form.addEventListener('submit', recebeEvento); // método que escuta o evento (form)
}
meuEscopo();