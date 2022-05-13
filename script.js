const calcular = document.getElementById("calcular");


function imc () {
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");

    if (nome.value !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        }else if (valorIMC <25) {
            classificacao = 'com peso normal. Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.';
        }else if (valorIMC <29.9) {
            classificacao = 'com sobrepeso. Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.';
        }else if (valorIMC <34.9) {
            classificacao = 'Com obesidade grau I. Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.'

        }else if (valorIMC <39.9) {
            classificacao = 'com obesidade grau I. Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.';
        }else if (valorIMC >40) {
            classificacao = 'com Obesidade grau III. Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.';
        }

        resultado.textContent = `${nome}, seu IMC (indice de massa corporal) é ${valorIMC} e você esta ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!'
    }

}

calcular.addEventListener('click', imc);