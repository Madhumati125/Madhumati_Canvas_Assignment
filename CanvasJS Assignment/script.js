const canvas = document.getElementById("MyCanvas");
const cxt = canvas.getContext("2d");

const CirX = 100;
const CirY = 100;
const CirR = 50;

function DrawCir(){
    cxt.beginPath();
    cxt.arc(CirX,CirY,CirR,0, 2*Math.PI);
    cxt.fillStyle = 'yellow';
    cxt.fill();
    cxt.closePath();
}

function DrawCir1(){
    cxt.beginPath();
    cxt.arc(CirX,CirY,CirR,0,2*Math.PI);
    cxt.fillStyle = 'blue';
    cxt.fill();
    cxt.closePath();
}
DrawCir1();

const Arrow1x = canvas.width - 300;
let Arrowx = Arrow1x;
const Arrowy = 100;
const Speed = 4;
let Moving = false;

function DrawArro(){
    cxt.clearRect(0, 0, canvas.width, canvas.height);

    DrawCir();

    cxt.beginPath();
    cxt.moveTo(Arrowx,Arrowy);
    cxt.lineTo(Arrowx + 50, Arrowy - 20);
    cxt.lineTo(Arrowx + 50, Arrowy + 20);
    cxt.closePath();
    cxt.fillStyle = 'black';
    cxt.fill();

    cxt.beginPath();
    cxt.moveTo(Arrowx+50, Arrowy);
    cxt.lineTo(Arrowx+100, Arrowy);
    cxt.lineWidth = 9;
    cxt.strokeStyle = 'black';
    cxt.stroke();

    if(Moving){
        if(Arrowx > CirX + CirR){
            Arrowx -= Speed;
        }
        else{
            Moving = false;
        }
    }

    requestAnimationFrame(DrawArro);
}

canvas.addEventListener('click',function(event){
    const ClickX = event.clientX - canvas.offsetLeft;

    if(ClickX >= CirX - CirR && ClickX <= CirX + CirR && !Moving){
        Moving = true;
    }
});

function ResetArro(){
    Moving = false;
    Arrowx = Arrow1x;
}
const Restbutton = document.getElementById("resetbutton");
Restbutton.addEventListener('click', ResetArro);
DrawArro();