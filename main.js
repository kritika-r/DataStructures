canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

random_background_image=["nasa_image_1.jpeg","nasa_image_2.jpeg","nasa_image_3.jpeg","nasa_image_4.jpeg"]

rover_width= 100;
rover_height= 90;

random_number= Math.floor(Math.random() *4);

rover_x= 10;
rover_y= 10;

background_img= random_background_image[random_number];
console.log("The background image is" +background_img);
rover_img= "rover.png";

function add(){
    bg_img_tag= new Image();
    bg_img_tag.onload= upload_bg();
    bg_img_tag.src= background_img;

    rover_img_tag= new Image();
    rover_img_tag.onload= upload_rover();
    rover_img_tag.src= rover_img;

}
function upload_bg(){
    ctx.drawImage(bg_img_tag,0,0,canvas.width,canvas.height);

}
function upload_rover(){
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
    
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed= e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
    up();
    console.log("Up");

}
if(keyPressed=='40'){
    down();
    console.log("Down");
    
}
if(keyPressed=='37'){
    left();
    console.log("Left");
    
}
if(keyPressed=='39'){
    right();
    console.log("Right");
    
}

}
function up(){
    if(rover_y>=0){
        rover_y= rover_y-10;
        console.log("When Up Arrow is pressed, X=" +rover_x+"Y=" +rover_y);
        upload_bg();
        upload_rover();

    }
}
function down(){
    if(rover_y<=500){
        rover_y= rover_y+10;
        console.log("When Down Arrow is pressed, X=" +rover_x+"Y=" +rover_y);
        upload_bg();
        upload_rover();
        
    }
}
function left(){
    if(rover_x>=0){
        rover_x= rover_x-10;
        console.log("When Left Arrow is pressed, X=" +rover_x+"Y=" +rover_y);
        upload_bg();
        upload_rover();
        
    }
}
function right(){
    if(rover_x<=700){
        rover_x= rover_x+10;
        console.log("When Right Arrow is pressed, X=" +rover_x+"Y=" +rover_y);
        upload_bg();
        upload_rover();
        
    }
}