var mouseX;
var mouseY;

var KEY_LEFT_ARROW = 37;
var KEY_RIGHT_ARROW = 39;
var KEY_UP_ARROW = 38;
var KEY_DOWN_ARROW = 40;

var KEY_W = 87;
var KEY_A = 65;
var KEY_S = 83;
var KEY_D = 68;


function setupInput() {
    canvas.addEventListener('mousemove', handleMouse);
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    blueWarrior.setupInput(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_RIGHT_ARROW, KEY_LEFT_ARROW);
}

function keySet(event, warrior, setTo) {
    if (event.keyCode === warrior.controlKeyLeft) {
        warrior.keyHeld_Left = setTo;
    } 
    
    if (event.keyCode === warrior.controlKeyRight) {
        warrior.keyHeld_Right = setTo;
    } 
    
    if (event.keyCode === warrior.controlKeyUp) {
        warrior.keyHeld_Up = setTo;
    } 
    
    if (event.keyCode === warrior.controlKeyDown) {
        warrior.keyHeld_Down = setTo;
    }
}

function keyPressed(event) {
    // console.log("Keypressed:" + event.keyCode);
    keySet(event, blueWarrior, true);
    event.preventDefault();
}

function keyReleased(event) {
    keySet(event, blueWarrior, false);
    
    event.preventDefault();
}

function handleMouse(event) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouseX = event.clientX - rect.left - root.scrollLeft;
    mouseY = event.clientY - rect.top - root.scrollTop;
}