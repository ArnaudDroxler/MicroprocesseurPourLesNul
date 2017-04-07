var canvas;

function init(){
    canvas = document.getElementById('canvas');
    drawMicroProcesseur();
}

function  drawMicroProcesseur() {
    $('canvas').drawRect({
        fillStyle: '#cacaca',
        x:0, y: 0,
        width: canvas.width,
        height: canvas.height,
        fromCenter: false
    });

}

init();