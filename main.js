var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object ="";
var block_image_object ="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
     player_object = Img;
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(150);
     player_object.set({
         top:player_y,
         left:player_x
     });
     canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object = Img;
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("shift and P key pressed");
        block_image_height = block_image_height +10;
        block_image_width = block_image_width +10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

if(e.shiftKey == true && keyPressed == "77"){
    console.log("shift and M key pressed");
    block_image_height = block_image_height -10;
    block_image_width = block_image_width -10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if(keyPressed == "38"){
    console.log("up");
 up();
}

if(keyPressed == "40"){
    console.log("down");
 down();
}

if(keyPressed == "37"){
    console.log("left");
 left();
}

if(keyPressed == "39"){
    console.log("right");
 right();
}

if(keyPressed == "87"){
    console.log("wall");
 new_image("wall.jpg");
}

if(keyPressed == "71"){
    console.log("ground");
 new_image("ground.png");
}

if(keyPressed == "76"){
    console.log("light_green");
 new_image("light_green.png");
}

if(keyPressed == "84"){
    console.log("trunk");
 new_image("trunk.jpg");
}

if(keyPressed == "82"){
    console.log("roof");
 new_image("roof.jpg");
}

if(keyPressed == "89"){
    console.log("yellow wall");
 new_image("yellow_wall.png");
}

if(keyPressed == "68"){
    console.log("dark green");
 new_image("dark_green.png");
}

if(keyPressed == "85"){
    console.log("unique");
 new_image("unique.png");
}

if(keyPressed == "67"){
    console.log("cloud");
 new_image("cloud.jpg");
}

}


function up(){
    if (player_y >= 0){
player_y = player_y - block_image_height;
console.log("block image height = " + block_image_height);
console.log("When up arrow is pressed X = " + player_x + ", Y = " + player_y);
canvas.remove(player_object);
player_update();
    }
}

function down(){
    if (player_y <= 580){
player_y = player_y + block_image_height;
console.log("block image height = " + block_image_height);
console.log("When down arrow is pressed X = " + player_x + ", Y = " + player_y);
canvas.remove(player_object);
player_update();
    }
}

function left(){
    if (player_x > 0){
player_x = player_x - block_image_width;
console.log("block image width = " + block_image_width);
console.log("When left arrow is pressed X = " + player_x + ", Y = " + player_y);
canvas.remove(player_object);
player_update();
    }
}

function right(){
    if (player_x < 580){
player_x = player_x + block_image_width;
console.log("block image width = " + block_image_width);
console.log("When right arrow is pressed X = " + player_x + ", Y = " + player_y);
canvas.remove(player_object);
player_update();
    }
}
