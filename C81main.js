var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
var width_of_line= 2;
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d")

 var color= "black";

 /*ctx.beginPath();
 ctx.strokeStyle= color;
 ctx.lineWidth= 2;
 ctx.arc(200, 200, 40, 0, 2 * Math.PI);
 ctx.stroke();*/

 canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e){
     color= document.getElementById("colour_input").value;
     width_of_line = document.getElementById("width_input").value;
     console.log(color);
     
     /*mouse_x= e.clientX - canvas.offsetLeft;
     mouse_y= e.clientY - canvas.offsetTop;*/

     mouseEvent= "mouseDown";

    
     

 }
 
 canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e){
     mouseEvent="mouseLeave";
 }

 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e){
     mouseEvent="mouseUp";
 }

 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
    current_mouse_x= e.clientX - canvas.offsetLeft;
    current_mouse_y= e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;
        console.log("Last position of X and Y coordinates=");
        console.log("X= " +last_position_of_x+ "Y=" +last_position_of_y);

        ctx.moveTo(last_position_of_x,last_position_of_y);

        
        console.log("Current position of X and Y coordinates=");
        console.log("X= " +current_mouse_x+ "Y=" +current_mouse_y);
        ctx.lineTo(current_mouse_x,current_mouse_y);
        ctx.stroke();
        
    }
    last_position_of_x= current_mouse_x;
    last_position_of_y= current_mouse_y;
 }

 /*function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
 }*/

 function clearCanvas(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
 }