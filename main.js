function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keypressed == '87')
    {
        up();
        console.log("up");
    }
    if(keypressed == '83')
    {
        down();
        console.log("down");
    }
    if(keypressed == '68')
    {
        left();
        console.log("left");
    }
    if(keypressed == '65')
    {
       right();
        console.log("right");
    }
}