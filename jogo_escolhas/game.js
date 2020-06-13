var contador = document.querySelector('.contador');
var contadorDeTempo = 0;

// iten[0] = chave //iten[1] = dinheiro //iten[2] = cervejas //itens[3] karaoke
var itens = [false,false, 0, false];

var btn1 = elementFactory('button','btn-1','button','Começar!');
var btn2 = elementFactory('button', 'btn-2', 'button', 'Desistir!');
var btn3 = elementFactory('button','btn-3','button','Não Clique!!');
var p = elementFactory('p','texto','texto','');

var texto = document.querySelector('.texto');
var btnClass = document.querySelector('.button');

texto.appendChild(p);
btnClass.appendChild(btn1);
btnClass.appendChild(btn2);
btnClass.appendChild(btn3);

mudaButao(estarCasa, morrer, morrer)

function elementFactory(type, id, classe, content){
    let elementCreated = document.createElement(`${type}`);
    elementCreated.setAttribute('id', `${id}`);
    elementCreated.classList.add(`${classe}`);
    elementCreated.innerText = `${content}`;

    return elementCreated;
}

function deleteElement(id, classePai){
    let element = document.getElementById(`${id}`);
    classePai.removeChild(element)
}

function mudaButao(botao1, botao2, botao3){
    btn1.addEventListener('click', botao1);
    btn2.addEventListener('click', botao2);
    btn3.addEventListener('click', botao3);
}

function mudaContador(valor){
    contadorDeTempo += valor;
    contador.innerHTML = `${contadorDeTempo}/100 horas`;
}

function confereContador(){
    if(contadorDeTempo > 100){
        montarLayout('O vírus se espalhou pelo país e após mutação matou toda a população! Você é um péssimo pesquisador!', '','','');
        btn1.style.display = 'none';
        btn2.style.display = 'none';
        btn3.style.display = 'none';
    }
}

function montarLayout(text_p, text_b1, text_b2, text_b3){
    deleteElement('btn-1', btnClass)
    deleteElement('btn-2', btnClass)
    deleteElement('btn-3', btnClass)
    deleteElement('texto', texto)
    p = elementFactory('p', 'texto', 'texto', `${text_p}`)
    btn1 = elementFactory('button','btn-1','button',`${text_b1}`);
    btn2 = elementFactory('button', 'btn-2', 'button', `${text_b2}`);
    btn3 = elementFactory('button','btn-3','button',`${text_b3}`);
    texto.appendChild(p);
    btnClass.appendChild(btn1);
    btnClass.appendChild(btn2);
    btnClass.appendChild(btn3);
}

function estarCasa(){
    mudaContador(1)
    montarLayout('O que você faz?', 'Sair de Casa!', 'Ficar em Casa!', 'Chorar!')
    mudaButao(escolhaItens, estarCasa, chorar)
    confereContador()
    
}

function chorar(){
    mudaContador(10)
    montarLayout('Você ficou chorando por 10h!','','Dias difíceis!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(estarCasa, estarCasa, estarCasa);
    confereContador()
}

function morrer(){
    deleteElement('btn-1', btnClass)
    deleteElement('btn-2', btnClass)
    deleteElement('btn-3', btnClass)
    deleteElement('texto', texto)
    p = elementFactory('p', 'texto', 'texto', 'Você morreu!')
    texto.appendChild(p);
    
}

function escolhaItens(){
    mudaContador(1)
    montarLayout('Você resolveu fazer algo! Escolha um Item para levar com você!', 'Guarda-Chuva', 'Chave do carro', 'Máscara')
    mudaButao(guardaChuva, chaveCarro, ondeir)
    confereContador()

}

function guardaChuva(){
    montarLayout('O coitadinho não pode se molhar?? O Corona está no ar! E agora dentro de você! Você não conseguiu vaga num hospital de campanha!','','OK!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer);

}

function chaveCarro(){
    montarLayout('A Dondoca não pode andar um pouquinho? Uma carreata pró-flexibilização passou por você e você pegou Corona! Você não conseguiu vaga num hospital de campanha!','','OK!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer);
}

function ondeir(){
    mudaContador(1)
    montarLayout('Agora que saiu de casa, você já pode decidir para onde quer ir!', 'Faculdade', 'Brasília', 'Agência da Caixa')
    mudaButao(faculdade, irbrasilia, caixa)
    confereContador()
}

function caixa(){
    mudaContador(2)
    montarLayout('Você está na Agência da Caixa, para qual fila você vai para retirar o Corona Voucher?', 'Fila da esquerda( 5 pessoas)', 'Caixa eletrônico', 'Fila da direita(2 velhinhos)')
    mudaButao(filaEsq , eletronico, filaDir)
    confereContador()
}

function filaEsq(){
    mudaContador(3)
    itens[1] = true;
    montarLayout('Demorou, mas você agora tem DINHEIRO, o Corona Voucher irá te ajudar', '','ESTOU RICAAAAAA','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(ondeir, ondeir, ondeir)
    confereContador()
}

function filaDir(){
    mudaContador(4)
    montarLayout('Quando finalmente chegou sua vez, percebeu que estava na fila preferencial e te mandaram sair da fila!', '','Fazer o que né?','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(caixa, caixa, caixa)
    confereContador()
}

function eletronico(){
    mudaContador(3)
    montarLayout('O caixa eletrônico está quebrado', '','OK!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(caixa, caixa, caixa)
    confereContador()
}

function irbrasilia(){
    mudaContador(1);
    montarLayout('Como você vai pra Brasília?', 'Ônibus', 'Avião', 'Mudei de idéia')
    mudaButao(onibus, aviao, ondeir)
    confereContador()
}

function aviao(){
    mudaContador(8)
    montarLayout('Você quer salvar o mundo e esqueceu que o aeroporto está fechado?', '','Dei mole!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(irbrasilia, irbrasilia, irbrasilia)
    confereContador()
}

function onibus(){
    if(itens[1]==true){
        mudaContador(15)
        montarLayout('Depois de uma longa viagem, você chegou em Brasília! O chefe do seu laboratório está em uma manifestação em frente ao Palácio do Planalto!', 'Ir lá falar com ele', 'Ir lá bater nos manifestantes', 'Mandar um Zap e marcar no bar do Zé')
        mudaButao(falarComEle, bater, zap)
        confereContador()
    }
    if(itens[1]==false){
        mudaContador(4)
        montarLayout('Você quer ir para Brasília de ônibus, mas você não tem dinheiro! Como pretende comprar a passagem?', '','Dei mole!','')
        btn1.style.display = 'none';
        btn3.style.display = 'none';
        mudaButao(irbrasilia, irbrasilia, irbrasilia)
        confereContador()
    }
}

function falarComEle(){
    montarLayout('O doidão quer ir pra multidão no meio de uma Pandemia?? Você pegou Corona e não conseguiu vaga em hospital de Campanha!','','E agora?','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer);
}

function zap(){
    mudaContador(1)
    montarLayout('Você e seu chefe estão no bar do Zé!', 'Toma uma pra relaxar', 'Pede a chave do Laboratório', 'Canta no Karaokê')
    mudaButao(cerveja, pedir, karaoke)
    confereContador()
}

function cerveja(){
    montarLayout('Seu chefe gosta de cerveja!','','Eu também!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(zap, zap, zap);
    itens[2] +=1;
}

function karaoke(){
    montarLayout('Seu chefe adora Karaokê','','Quem não gosta né?','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(zap, zap, zap);
    itens[3] = true;
}

function pedir(){
    if(itens[3]==true && itens[2]>1){
        montarLayout('Seu chefe meio bêbado e muito feliz te deu a chave!','','Eu considero ele pra caralho!!','')
        btn1.style.display = 'none';
        btn3.style.display = 'none';
        mudaButao(viagem, viagem, viagem);
        itens[0] = true;
    } else{
        mudaContador(3)
        montarLayout('Seu chefe diz que não pode te dar a chave!','','Desculpa chefia!','')
        btn1.style.display = 'none';
        btn3.style.display = 'none';
        mudaButao(zap, zap, zap);
    }
}

function viagem(){
    mudaContador(12)
    montarLayout('Você voltou bêbado de Brasília pra sua casa!','','Que noite!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(estarCasa, estarCasa, estarCasa);

}

function bater(){
    mudaContador(5)
    montarLayout('O Bolsodrácula te ama e te chamou para ir conhecer ele no Palácio do Planalto!', 'Eu vou!', 'Eu não respondo!', 'Falo que não vou!')
    mudaButao(irReuniao, naoResponder, naoIr)
    confereContador()
}

function naoResponder(){
    montarLayout('Ele mandou a PF te investigar e você foi preso! Você ficou na prisão até o mundo sucumbir!','','','')
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
}

function naoIr(){
    montarLayout('Ele disparou FakeNews sobre você e um miliciano te espancou!','','E agora?','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer)
}

function irReuniao(){
    mudaContador(5)
    montarLayout('Estão só vocês dois na sala dela, o que você faz?', 'Fala que a Terra é plana!', 'Pergunta se ele já viu o novo tweet do Olavo de Carvalho', 'Pergunta por que ele não ajuda a população!')
    mudaButao(terraPlana, tweet, ajudar)
    confereContador()
}

function terraPlana(){
    montarLayout('Vocês viraram grandes amigos e você foi o último ser humano a morrer! Nada mal!','','','')
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
}

function ajudar(){
    montarLayout('Ele ri e pergunta: Ajudar quem? - Segundos depois te morde!','','Será que eu virei um morcegão também?','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer)
}

function tweet(){
    mudaContador(4)
    montarLayout('Ele sai correndo para ver o novo tweet e você fica sozinho na sala dele!', 'Assina para dar verba extra pra Saúde', 'Passa trote pro 02', 'Procura por algo')
    mudaButao(assinar, trote, procurar)
    confereContador()
}

function assinar(){
    montarLayout('Você é descoberto e morto por Bolsodrácula, mas a verba pode salvar a população!','','Será que eu sou um herói?','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(heroi, heroi, heroi)
}

function heroi(){
    montarLayout('A verba extra não passa no congresso!','','FDP!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer)
}

function trote(){
    montarLayout('Ele cai no trote do Tomas Turbando, mas descobre que foi você e manda seus milicianos te matarem! Mas que valeu a pena valeu!!','','','')
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
}

function procurar(){
    mudaContador(4)
    montarLayout('Você acha uma Vacina escondida, mas Bolsodrácula aparece e se transforma em um morcego espalhador de Corona!','','Morcegos são mamíferos!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(lutar, lutar, lutar)
    confereContador()
}

function lutar(){
    mudaContador(1)
    montarLayout('Bolsodrácula prepara pra atacar!', 'Corre!', 'Injeta a vacina em você mesmo!', 'Taca a vacina no Morcegão!')
    mudaButao(corre, injeta, taca)
    confereContador()
}

function corre(){
    montarLayout('O bicho voa! Tu quer correr mais que ele? Ele te mordeu pra deixar de ser otário!','','Fui burro!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer)
}

function taca(){
    montarLayout('Não foi a idéia mais inteligente do mundo, e se você errasse? Pois é, você errou e agora ele está vindo!!','','AHHHHHH!!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer)
}

function injeta(){
    mudaContador(1)
    montarLayout('Você agora tá bombadão de Vacina a base de alho cru! E Bolsodrácula vem pro ataque!', 'Mostra o pescocinho', 'Tenta morder o Bolsodrácula', 'Se abaixa!')
    mudaButao(pescoco, morde, abaixa)
    confereContador()
}

function morde(){
    montarLayout('Você é um pesquisador do Capes ou o Ozzy Osbourne?','','Eu sou o Príncipe das Trevas!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(ozzy, ozzy, ozzy)
}

function ozzy(){
    montarLayout('Não, você não é o Ozzy!','','Ah, mas eu quero!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer)
}

function abaixa(){
    montarLayout('Você desvia do ataque, mas o gabinete do ódio entra na sala e atira em você!','','Pra quê tudo isso né?','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer)
}

function pescoco(){
    montarLayout('Bolsodrácula te morde! Mas seu corpo não resiste a Vacina e ele morre! Você espalhou a vacina e o vírus foi derrotado!!','','Então eu ganhei?','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(ganhar, ganhar, ganhar)
}

function ganhar(){
    montarLayout('WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN! WIN!','','','')
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
}

function faculdade(){
    mudaContador(2)
    montarLayout('O que você veio fazer na Faculdade', 'Mudei de idéia!!', 'Ir para o Laboratório', 'Ir pra Choppada')
    mudaButao(ondeir, laboratorio, choppada)
    confereContador()
}

function choppada(){
    mudaContador(20)
    montarLayout('Você bebeu demais, foi carregado por seus amigos e só acordou no dia seguinte em casa!','','TUM TA TA TUM TUM TA!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(estarCasa, estarCasa, estarCasa)
    confereContador()
}

function laboratorio(){
    
    if(itens[0]==true){
        mudaContador(2)
        montarLayout('O quê você quer fazer no Laboratório?', 'Retomar pesquisa sobre Cloroquina', 'Avisar a OMS que o Bolsodrácula omite dados', 'Procurar por Vacinas')
        mudaButao(cloroquina, avisar, vacina)
        confereContador()
    }
    if(itens[0]==false){
        mudaContador(3)
        montarLayout('O laboratório está trancado! Só o chefe do laboratório tem a chave!', '','Pode crer!','')
        btn1.style.display = 'none';
        btn3.style.display = 'none';
        mudaButao(faculdade, faculdade, faculdade)
        confereContador()
    }
    
}

function cloroquina(){
    mudaContador(20)
    montarLayout('Você perdeu muito tempo e não obteve bons resultados!','','Nossa, que surpresa!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(laboratorio, laboratorio, laboratorio)
    confereContador()
}

function avisar(){
    montarLayout('Bolsodrácula influencia a PF e através de escutas descobre seu aviso! Oitenta e sete balas perdidas te acertam no caminho para casa!','','Sou muito azarado mesmo né?','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(morrer, morrer, morrer)
}

function vacina(){
    mudaContador(12)
    montarLayout('Você acha a vacina pro COVID-19 e um amigo seu te dá carona para Brasília para enfrentar o Bolsodrácula! Vocês marcaram de duelar amanhã às duas horas na Ceilândia em frente ao lote 14. ','','É pra lá que eu vou!','')
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    mudaButao(lutar, lutar, lutar)
    confereContador()
}