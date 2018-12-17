function drawBitmapCenteredWithRotation(bitmap, x, y, angle) {
    canvasContext.save();
    canvasContext.translate(x, y);
    canvasContext.rotate(angle);
    canvasContext.drawImage(bitmap, -bitmap.width / 2, -bitmap.height / 2);
    canvasContext.restore();
}

function colorRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

function colorCircle(x, y, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
    canvasContext.fill();  
}

function colorText(textToShow, textX, textY, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillText(textToShow, textX, textY);
}

