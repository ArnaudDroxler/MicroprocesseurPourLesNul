var canvas = null;

window.onload = function(){
    canvas = document.getElementById("canvas");

    var displayWidth = $('#container').width();
    var displayHeight = $('#container').height();
    canvas.width = parseInt(displayWidth * 0.8);
    canvas.height =  parseInt(displayHeight * 0.8);

    console.log(canvas.width);

    tick();
};

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
        x:100, y: 100,
        width: 100,
        height: 100,
        fromCenter: false
    });

}

function resize(){
    var displayWidth = $('#container').width();
    var displayHeight = $('#container').height();
    canvas.width = parseInt(displayWidth * 0.8);
    canvas.height =  parseInt(displayHeight * 0.8);
}

function tick() {
    requestAnimationFrame(tick);
    resize();
    drawMicroProcesseur();
}
