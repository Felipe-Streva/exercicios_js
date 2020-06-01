var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');
var redNumber = document.querySelector("#redNumber");
var greenNumber = document.querySelector("#greenNumber");
var blueNumber = document.querySelector("#blueNumber");
var divbloco = document.querySelector('.divbloco');

function alteraBG(){
    divbloco.style.background = `rgb(${redNumber.value},${greenNumber.value},${blueNumber.value})`;
}

function vermelho(){
    redNumber.value = red.value;
    alteraBG();
}

function verde(){
    greenNumber.value = green.value;
    alteraBG();
}

function azul(){
    blueNumber.value = blue.value;
    alteraBG();
}

function vermelhoNumber(){
    red.value = redNumber.value;
    alteraBG();
}

function verdeNumber(){
    green.value = greenNumber.value;
    alteraBG();
}

function azulNumber(){
    blue.value = blueNumber.value;
    alteraBG();
}