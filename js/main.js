var canvas = null;
var displayWidth = 0;
var displayHeight = 0;
var ud = 0;

window.onload = function(){
    canvas = document.getElementById("canvas");
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
        layer: true,
        fillStyle: '#fdff3d',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 100, y: 120,
        width: 1200,
        height: 500,
        fromCenter: false,
        click: function(layer) {
            $( "#content" ).empty();
            $( "#content" ).append( "" );
        }
    });

    //Bus d adresse
    $('canvas').drawRect({
        fillStyle: '#0b00ff',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 150, y: 30,
        width: 1500,
        height: 40,
        fromCenter: false,
    });

    $('canvas').drawText({
      fillStyle: '#ffffff',
      x: 260, y: 50,
      fontSize: 30,
      fontFamily: 'Verdana, sans-serif',
      text: 'Bus d\'adresse'
    });

    //Bus de donne
    $('canvas').drawRect({
        fillStyle: '#ff0014',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 150, y: 680,
        width: 1500,
        height: 40,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#ffffff',
      x: 280, y: 700,
      fontSize: 30,
      fontFamily: 'Verdana, sans-serif',
      text: 'Bus de données'
    });



    //Holoroge
    $('canvas').drawRect({
        fillStyle: '#6b6b6b',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 1350, y: 570,
        width: 80,
        height: 80,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 1400, y: 600,
      fontSize: 40,
      fontFamily: 'Verdana, sans-serif',
      text: 'H'
    });

    //Memoire principale
    $('canvas').drawRect({
        fillStyle: '#00fff7',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x:1450, y: 170,
        width: 400,
        height: 400,
        fromCenter: false
    });
            //Programme
            $('canvas').drawRect({
                fillStyle: '#fefefe',
                strokeStyle: '#060606',
                strokeWidth: 2,
                x:1500, y: 200,
                width: 300,
                height: 150,
                fromCenter: false
            });

            $('canvas').drawText({
              fillStyle: '#131313',
              x:1650, y: 280,
              fontSize: 30,
              fontFamily: 'Verdana, sans-serif',
              text: 'Programme'
            });

            //Donne
            $('canvas').drawRect({
                fillStyle: '#fefefe',
                strokeStyle: '#060606',
                strokeWidth: 2,
                x:1500, y: 390,
                width: 300,
                height: 150,
                fromCenter: false
            });

            $('canvas').drawText({
              fillStyle: '#131313',
               x:1650, y: 470,
              fontSize: 30,
              fontFamily: 'Verdana, sans-serif',
              text: 'Données'
            });

    //Unite de traitement
    $('canvas').drawRect({
        fillStyle: '#defaff',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 140, y: 150,
        width: 500,
        height: 350,
        fromCenter: false
    });

    //Accumulateur
    $('canvas').drawRect({
        fillStyle: '#a4f1ff',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 200, y: 200,
        width: 100,
        height: 50,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 250, y: 225,
      fontSize: 20,
      fontFamily: 'Verdana, sans-serif',
      text: 'Acc.'
    });


    //registre d etats
    $('canvas').drawRect({
        fillStyle: '#a4f1ff',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 400, y: 250,
        width: 200,
        height: 50,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 500, y: 275,
      fontSize: 20,
      fontFamily: 'Verdana, sans-serif',
      text: 'Registre d\'etats'
    });

    //UAL
    $('canvas').drawLine({
      strokeStyle: '#000',
      fillStyle: '#a4f1ff',
      strokeWidth: 2,
      x1: 225, y1: 300,
      x2: 275, y2: 300,
      x3: 325, y3: 400,
      x4: 275, y4: 400,
      x5: 250, y5: 350,
      x6: 225, y6: 400,
      x7: 175, y7: 400,
      closed: true
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 250, y: 325,
      fontSize: 20,
      fontFamily: 'Verdana, sans-serif',
      text: 'UAL'
    });


    //Registre de donneés
    $('canvas').drawRect({
        fillStyle: '#f3fdff',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 200, y: 540,
        width: 200,
        height: 50,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 300, y: 565,
      fontSize: 20,
      fontFamily: 'Verdana, sans-serif',
      text: 'Registre Données'
    });

    //Unite de commande
    $('canvas').drawRect({
        fillStyle: '#ffecd9',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 750, y: 230,
        width: 500,
        height: 350,
        fromCenter: false
    });

    //registre d intruction
    $('canvas').drawRect({
        fillStyle: '#fad3ac',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 825, y: 500,
        width: 150,
        height: 50,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 900, y: 525,
      fontSize: 20,
      fontFamily: 'Verdana, sans-serif',
      text: 'Registre d\'instruction',
      maxWidth: 150
    });

    //decodeur d intruction
    $('canvas').drawRect({
        fillStyle: '#fad3ac',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 1050, y: 500,
        width: 150,
        height: 50,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 1125, y: 525,
      fontSize: 20,
      fontFamily: 'Verdana, sans-serif',
      text: 'Décodeur d\'instruction',
      maxWidth: 150
    });

    //block logique de commqnde
    $('canvas').drawRect({
        fillStyle: '#fad3ac',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 825, y: 400,
        width: 300,
        height: 50,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 975, y: 425,
      fontSize: 20,
      fontFamily: 'Verdana, sans-serif',
      text: 'Block logique de commande',
    });

    //PC
    $('canvas').drawRect({
        fillStyle: '#fad3ac',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 825, y: 300,
        width: 100,
        height: 50,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 875, y: 325,
      fontSize: 20,
      fontFamily: 'Verdana, sans-serif',
      text: 'PC',
    });

    //Registre de donneés
    $('canvas').drawRect({
        fillStyle: '#f3fdff',
        strokeStyle: '#060606',
        strokeWidth: 2,
        x: 900, y: 150,
        width: 200,
        height: 50,
        fromCenter: false
    });

    $('canvas').drawText({
      fillStyle: '#131313',
      x: 1000, y: 175,
      fontSize: 20,
      fontFamily: 'Verdana, sans-serif',
      text: 'Registre d\'adresse'
    });


}

function resize(){
    displayWidth = $('#container').width();
    displayHeight = $('#container').height();
    canvas.width = parseInt(displayWidth);
    canvas.height =  parseInt(displayHeight * 0.8);
    ud = parseInt(displayWidth/200);

}

function tick(){
    requestAnimationFrame(tick);
    resize();
    drawMicroProcesseur();
}
