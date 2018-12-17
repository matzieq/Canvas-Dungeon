var WARRIOR_MOVE_SPEED = 5;


function Warrior () {
    this.x = 75;
    this.y = 75;
    this.prevX = this.x;
    this.prevY = this.x;
    this.image;
    this.name = "Untitled warrior";

    this.keyHeld_Up = false;
    this.keyHeld_Down = false;
    this.keyHeld_Right = false;
    this.keyHeld_Left = false;

    this.controlKeyUp;
    this.controlKeyDown;
    this.controlKeyLeft;
    this.controlKeyRight;

    this.keysHeld = 0;

    this.setupInput = function (upKey, downKey, rightKey, leftKey) {
        this.controlKeyUp = upKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
        this.controlKeyRight = rightKey;
    }

    this.reset = function (image, name) {
        this.name = name;
        this.image = image;
        for (var row = 0; row < TILE_ROWS; row++) {        
            for (var col = 0; col < TILE_COLS; col++) {
                var arrayIndex = rowColToArrayIndex(col, row);
                if (worldGrid[arrayIndex] === TILE_PLAYERSTART) {
                    worldGrid[arrayIndex] = TILE_FLOOR;
                    this.x = col * TILE_W + TILE_W / 2;
                    this.y = row * TILE_H + TILE_H / 2;
                    return;
                }
            }
        }
    }

    this.move = function() {
        this.prevX = this.x;
        this.prevY = this.y;
        // console.log(this.prevX, this.x);
        if (this.keyHeld_Up) {
            this.y -= WARRIOR_MOVE_SPEED;
        }
        if (this.keyHeld_Down) {
            this.y += WARRIOR_MOVE_SPEED
        }
        if (this.keyHeld_Left) {
            this.x -= WARRIOR_MOVE_SPEED;
        }
        if (this.keyHeld_Right) {
            this.x += WARRIOR_MOVE_SPEED;
        }
        handleWarriorAndWorld(this);
    }

    this.draw = function() {
        drawBitmapCenteredWithRotation(this.image, this.x , this.y, 0);
    }

}