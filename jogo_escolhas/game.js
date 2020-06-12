var texto = document.querySelector('#texto');
var contador = document.querySelector('.contador');
var contadorDeTempo = 0;
var btn1 = document.querySelector('#btn-1');
var btn2 = document.querySelector('#btn-2');
var btn3 = document.querySelector('#btn-3');

btn1.addEventListener('click', estarCasa)
btn2.addEventListener('click', morrer)
btn3.addEventListener('click', estarCasa)
  

function estarCasa(){

    textoButao('Sair de Casa' , 'Ficar em casa', 'Chorar');
    mudaButao(escolhaItens, estarCasa, morrer)

    if (escolha == 1){
        mudaContador(1);
        if (contadorDeTempo > 100){
            morrer(contadorDeTempo);
            return 0;
        }
        setTimeout(escolhaItens,1000);
        return 0;
    }else if (escolha == 2){
        mudaContador(3);
        if (contadorDeTempo > 100){
            morrer(contadorDeTempo);
            return 0;
        }
        alert("Você ficou em casa!");
        setTimeout(estarCasa,1000);
        return 0;
    } else {
        alert('Era 1 ou 2, você deve ser um péssimo pesquisador!')
        morrer(contadorDeTempo);
        return 0;
    }

    
}

function mudaButao(botao1, botao2, botao3){
    btn1.addEventListener('click', botao1);
    btn2.addEventListener('click', botao2);
    btn3.addEventListener('click', botao3);
}

function textoButao(botao1, botao2, botao3){
    btn1.innerHTML = `${botao1}`;
    btn2.innerHTML = `${botao2}`;
    btn3.innerHTML = `${botao3}`;
}

function mudaContador(valor){
    contadorDeTempo += valor;
    contador.innerHTML = `${contadorDeTempo}/100 horas`;
    return 0;
}

function morrer(){
    if(contadorDeTempo > 100){
        texto.innerHTML = 'Você demorou demais, o corona sofreu mutações e o mundo sucumbiu'
        btn1.style.display = 'none'
        return 0;
    }
    texto.innerHTML = "Você morreu"
    return 0;
}

function escolhaItens(){
    alert('Você vai sair de casa!')
    let escolha = prompt("Esolha um item: 1-Mascara 2-Chave do carro 3-Guarda-chuva")
    if (escolha == 1){
        mudaContador(1)
        if (contadorDeTempo > 100){
            morrer(contadorDeTempo);
            return 0;
        }
        ondeir1();
        return 0;
    }else if (escolha == 2){
        alert('Você vai sair no meio de uma Pandemia sem máscara? Você não é vacinado!');
        morrer(contadorDeTempo);
        return 0;
    } else if (escolha == 3){
        alert('Você vai sair no meio de uma Pandemia sem máscara? Você não é vacinado!');
        morrer(contadorDeTempo);
        return 0;
    } else {
        alert('Era 1, 2 ou 3, você deve ser um péssimo pesquisador!')
        morrer(contadorDeTempo);
        return 0;
    }

    
}

function ondeir1(){
    alert('Para onde você deseja ir?')
    let escolha = prompt("1 - Faculdade , 2 - Agência da Caixa")
    if (escolha == 1){
        mudaContador(4);
        if (contadorDeTempo > 100){
            morrer(contadorDeTempo);
            return 0;
        }
        faculdade();
        return 0;
    }else if (escolha == 2){
        mudaContador(2);
        if (contadorDeTempo > 100){
            morrer(contadorDeTempo);
            return 0;
        }
        alert("Você ficou em casa!");
        agenciaCaixa();
        return 0;
    } else {
        alert('Era 1 ou 2, você deve ser um péssimo pesquisador!')
        morrer(contadorDeTempo);
        return 0;
    }

    
}