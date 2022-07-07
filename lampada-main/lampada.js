const turnOnOff = document.getElementById('turnOnOff');
const turnON = document.getElementById('turnON');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function islampBroken(){
    return lamp.src.indexOf ('quebrada') > - 1
}

function lampOn() {
    if (!islampBroken())
    lamp.src = './img/ligada.jpg';
}

function lampOff() {
    if (!islampBroken())
    lamp.src = './img/desligada.jpg';
}

function lampBronken() {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff(){
    if (turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
    
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBronken);


