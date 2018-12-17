

var TILE_W = 48;
var TILE_H = 48;

var TILE_COLS = 16;
var TILE_ROWS = 12;

var TILE_FLOOR = 0;
var TILE_WALL = 1;
var TILE_PLAYERSTART = 2;
var TILE_GOAL = 3;
var TILE_KEY = 4;
var TILE_DOOR = 5;

var TILE_GAP = 2;

var levelOne = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 1, 4, 0, 1,
                1, 0, 4, 0, 4, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1, 5, 1, 0, 4, 1,
                1, 1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 5, 1, 1,
                1, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 0, 0, 0, 1,
                1, 0, 0, 5, 0, 5, 0, 5, 3, 1, 0, 0, 0, 4, 0, 1,
                1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var worldGrid = [];
                 
function isTileTransparent(tile) {
    return (
        tile === TILE_GOAL || 
        tile === TILE_KEY ||
        tile === TILE_DOOR
    );
}
              
                 
function checkTileTypeAtColRow(col, row) {
    if (col >= 0 && col < TILE_COLS &&
        row >= 0 && row < TILE_ROWS) {        
        var worldIndexUnderCoord = rowColToArrayIndex(col, row);
        
        return (worldGrid[worldIndexUnderCoord]);
    } else {
        
        return TILE_WALL;
    }

} 

function handleWarriorAndWorld(warrior) {  
    var warriorWorldCol = Math.floor(warrior.x / TILE_W);
    var warriorWorldRow = Math.floor(warrior.y / TILE_H);
    var worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);
    
        var tileHere = checkTileTypeAtColRow(warriorWorldCol, warriorWorldRow);
        switch(tileHere) {
            case TILE_GOAL:
                console.log(warrior.name + ' WINS!');
                loadLevel(levelOne);
                break;
            case TILE_KEY:
                warrior.keysHeld++;
                worldGrid[worldIndexUnderWarrior] = TILE_FLOOR;
                break;
            case TILE_DOOR:
                if (warrior.keysHeld > 0) {
                    warrior.keysHeld--;
                    worldGrid[worldIndexUnderWarrior] = TILE_FLOOR;
                } else {
                    warrior.x = warrior.prevX;
                    warrior.y = warrior.prevY;    
                }
                break;
            case TILE_FLOOR:
                break;
            case TILE_WALL:
                warrior.x = warrior.prevX;
                warrior.y = warrior.prevY;
                break;
        }
        
    
}

function rowColToArrayIndex(col, row) {
    return col + TILE_COLS * row;
}


function drawWorlds() {
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for (var row = 0; row < TILE_ROWS; row++) {        
        for (var col = 0; col < TILE_COLS; col++) {
            var typeOfTileHere = worldGrid[arrayIndex];
            var imageToUse = worldPics[typeOfTileHere];
            if (isTileTransparent(typeOfTileHere)) {
                canvasContext.drawImage(worldPics[TILE_FLOOR], drawTileX, drawTileY);
            }
            canvasContext.drawImage(imageToUse, drawTileX, drawTileY);
            drawTileX += TILE_W;
            arrayIndex++;
        }
        drawTileX = 0;
        drawTileY += TILE_H;
    }
}