//exercício 1

function concatenaString(string1, string2){
    document.write(`${string1} ${string2}`);

}

//exercício 2

function saudacao(nome){
    document.write('Olá ' + nome + '! Tudo bem ' + nome + '?');
}

//exercício 3

function restoDe9(numero){
    var resto = numero%9
    document.write(`O resto de ${numero} divididos por 9 é: ${resto}`);
}

//exercício 4

function podedirigir(idadeMotorista, idadePermissao){
    if (idadeMotorista>=idadePermissao){
        document.write("você pode dirigir");
    } else{
        document.write("você não pode dirigir");
    }
}

//exercício 5

function podebeber(idadeBebado, idadePermissao){
    if (idadeBebado>=idadePermissao){
        document.write("você pode beber");
    } else{
        document.write("você não pode beber");
    }
}

//exercício 6

function passarSinal(cor){
    if (cor == "verde"){
        document.write("pode passar");
    } else if (cor == "amarelo"){
        document.write("Acelera cumpadi");
    } else if(cor == "vermelho"){
        document.write("pisa no freio");
    } else {
        return "dê como parametro uma das 3 cores do semáforo escritas em minúsculo";
    }
}

//exercício 7

function menu(){
    document.write("1-Refrigerante<br> 2-Suco<br> 3-Água");
}

//exercício 8

function escolher(){
    document.write("<br>1-Refrigerante<br> 2-Suco<br> 3-Água");

    setTimeout(perguntar, 1000);
}
function perguntar(){
    var escolha = prompt("Qual o número do item que você deseja?");
    
    if (escolha == 1){
        document.write("<br> Você escolheu Refrigerante");
    } else if (escolha == 2){
        document.write("<br> Você escolheu Suco");
    } else if (escolha == 3){
        document.write("<br> Você escolheu Água");
    } else{
        document.write("<br> Este item não está no Menu");
    }
}

//exercicio 9 == 8