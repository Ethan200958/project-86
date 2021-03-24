
var canvas = new fabric.Canvas('myCanvas');

var heroWidth = 10;
var heroHeight = 10;

var playerX = 300;
var playerY = 500;

var heroPlayerObject;
var heroObject;

function heroPlayerUpdate() {
    fabric.Image.fromURL("groot.jpg", function(Img){
        heroPlayerObject = Img;
        heroPlayerObject.scaleToWidth(250);
        heroPlayerObject.scaleToHeight(100);
        heroPlayerObject.set({
            top:playery,
            left:playerx
        });
        canvas.add(heroPlayerObject);
    });
}