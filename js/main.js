var canvas;

function init(){
    canvas = document.getElementById('canvas');

    drawMicroProcesseur();
}

function  drawMicroProcesseur() {

   //background
    $('canvas').drawRect({
        fillStyle: '#bfbfbf',
        x:0, y: 0,
        width: canvas.width,
        height: canvas.height,
        fromCenter: false
    });

    //Micropreocesseur
    $('canvas').drawRect({
        fillStyle: '#fdff3d',
        x:0, y: 0,
        width: 100,
        height: 100,
        fromCenter: false
    });

}

init();