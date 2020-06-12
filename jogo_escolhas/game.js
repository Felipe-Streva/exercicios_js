var text = document.querySelector('p');
var contador = document.querySelector('.contador')
var contadorDeTempo = 0;


setTimeout(estarCasa, 1000)    
console.log(contadorDeTempo)
function estarCasa(){

    let escolha = prompt("Você está em casa, para sair de casa digite 1, para ficar em casa digite 2")
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

function mudaContador(valor){
    contadorDeTempo += valor;
    contador.innerHTML = `${contadorDeTempo}/100 horas`;
    return 0;
}

function morrer(tempo){
    if(tempo > 100){
        text.innerHTML = 'Você demorou demais, o corona sofreu mutações e o mundo sucumbiu'
        return 0;
    }
    text.innerHTML = "Você morreu"
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