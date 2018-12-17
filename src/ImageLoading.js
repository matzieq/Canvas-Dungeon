var warriorPic = document.createElement('img');


var worldPics = [];

var picsToLoad;

function countLoadedImagesAndLaunch() {
	picsToLoad--;
	console.log(picsToLoad);
	if (picsToLoad === 0) {
		startGameAfterLoadingImages();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunch;
    imgVar.src = fileName;
}

function loadWorldImage(worldCode, fileName) {
	worldPics[worldCode] = document.createElement('img');
	beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {

	var imageList = [
		{imgVar: warriorPic, fileName: './img/Warrior.png'},
		{worldType: TILE_WALL, fileName: './img/world_wall.png'},
		{worldType: TILE_FLOOR, fileName: './img/world_floor.png'},
		{worldType: TILE_GOAL, fileName: './img/world_goal.png'},
		{worldType: TILE_KEY, fileName: './img/world_key.png'},
		{worldType: TILE_DOOR, fileName: './img/world_door.png'}
	];

	picsToLoad = imageList.length;

	for (var i = 0; i < imageList.length; i++) {
		if (imageList[i].imgVar) {
		    beginLoadingImage(imageList[i].imgVar, imageList[i].fileName);
		} else {
			loadWorldImage(imageList[i].worldType, imageList[i].fileName);
		}
	}
}

