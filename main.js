 mouseevent= "";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", down);
    
    function down(e) {
    color= document.getElementById("color1").value;
    width_of_line= document.getElementById("width1").value;
    mouseevent= "mousedown";
    //last_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
    //last_position_of_y= e.touches[0].clientY-canvas.offsetTop;
    }
    canvas.addEventListener("mouseup", up);
    
    function up(e) {
        mouseevent="mouseup";
    }
    canvas.addEventListener("mousemove", move);
    function move(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;
        if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        
        }
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    function cleararea(){
        ctx.clearRect(0, 0, 800, 600);
    
    }