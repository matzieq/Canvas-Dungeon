var canvas, canvasContext;
var blueWarrior = new Warrior();


window.onload = function() {
	canvas = document.querySelector("#gameCanvas");
	canvasContext = canvas.getContext('2d');

	colorRect(0, 0, canvas.width, canvas.height, '#000');
	colorText("LOADING", canvas.width / 2, canvas.height / 2, '#fff');
	loadImages();
}


function startGameAfterLoadingImages() {
	var framesPerSecond = 30;
	setInterval(update, 1000 / framesPerSecond);
	setupInput();
	loadLevel(levelOne);
}

function loadLevel(level) {
	worldGrid = level.slice();
	blueWarrior.reset(warriorPic, "Blue Storm");
}


// END MAIN LOGIC

function update() {
	moveStuff();
	drawStuff();
}

function moveStuff() {
    blueWarrior.move();
}
   
   
function drawStuff() {
    drawWorlds();
    blueWarrior.draw();
}
