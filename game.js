var canvasCtx ;
var canvasJet ;
var gameWidth  ;
var gameHeight  ;
var imgSprite ;
var fps = 5 ; // 10 frames / sec
var drawInterval ;
var jet1 ;

window.addEventListener('load', init, false);

// init for game
function init(){
	document.getElementById('fitiedGameScreen').innerHTML='<button id="clearCanvasBtn">Clear</button><button id="drawCanvasBtn">Draw</button><canvas id="gameCanvas" width="800px" height="500px" style="display:block;background:#f1f1f1;margin:50px auto 0px;"></canvas><canvas id="gameJet" width="800px" height="500px" style="display:block;margin:-500px auto 0px;"></canvas>';
	//$("#fitiedGameScreen").html('<canvas width="800px" height="500px" style="display:block;background:#f1f1f1;margin:50px auto 0px;"></canvas>') ;
	canvasCtx = document.getElementById('gameCanvas').getContext('2d');
	canvasJet = document.getElementById('gameJet').getContext('2d');
	// document.getElementById('clearCanvasBtn').addEventListener('click', clearCanvas, false);
	// document.getElementById('drawCanvasBtn').addEventListener('click', drawCanvas, false);
	gameWidth = document.getElementById('gameCanvas').width ;
	gameHeight = document.getElementById('gameCanvas').height ;
	imgSprite = new Image();
	imgSprite.src = 'gamesprite.png' ;
	imgSprite.addEventListener('load', drawBackground, false);
	jet1 = new Jet();
	document.addEventListener('keydown', checkKeyDown, false);
	document.addEventListener('keydown', checkKeyUp, false);
	startDrawing();
}

// Draw functions starts here
function drawBackground(){
	var srcX = 0 ;
	var srcY = 0 ;
	var drawX = 0 ;
	var drawY = 0 ;
	canvasCtx.drawImage(imgSprite, srcX, srcY, gameWidth, gameHeight, drawX, drawY, gameWidth, gameHeight);
}

function startDrawing(){
	stopDrawing();
	drawInterval = setInterval(draw, fps);

}

function draw(){
	jet1.draw();
}

function stopDrawing(){
	clearInterval(drawInterval);
}
// Draw functions ends here


// Jet functions starts here
function Jet() {
	this.srcX = 0 ;
	this.srcY = 510 ;
	this.drawX = 50 ;
	this.drawY = 100 ;
	this.width = 190 ;
	this.height = 90 ;
	this.speed = 2 ;
}

// ProtoType function
Jet.prototype.draw = function (){
	clearJet() ;
	canvasJet.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, 100, 50);
};
Jet.prototype.moveUp = function (){
	this.drawY -= this.speed ;
};
Jet.prototype.moveDown = function (){
	this.drawY += this.speed ;
};
Jet.prototype.moveRight = function (){
	this.drawX += this.speed ;
};
Jet.prototype.moveLeft = function (){
	this.drawX -= this.speed ;
};

function clearJet(){
	canvasJet.clearRect(0,0,gameWidth,gameHeight);
}

// Jet functions ends here

// Event Functions start here
function checkKeyDown(e){
	var keyId = (e.keyCode) ? e.keyCode : e.which ;
	if(keyId == 38 || keyId == 87){
		e.preventDefault();
		jet1.moveUp();
	}
	if(keyId == 40 || keyId == 83){
		e.preventDefault();
		jet1.moveDown();
	}
	if(keyId == 37 || keyId == 65){
		e.preventDefault();
		jet1.moveLeft();
	}
	if(keyId == 39 || keyId == 68){
		e.preventDefault();
		jet1.moveRight();
	}
}

function checkKeyUp(e){
	var keyId = (e.keyCode) ? e.keyCode : e.which ;
	if(keyId == 38 || keyId == 87){
		e.preventDefault();
		jet1.moveUp();
	}
	if(keyId == 40 || keyId == 83){
		e.preventDefault();
		jet1.moveDown();
	}
	if(keyId == 37 || keyId == 65){
		e.preventDefault();
		jet1.moveLeft();
	}
	if(keyId == 39 || keyId == 68){
		e.preventDefault();
		jet1.moveRight();
	}
}
// Event function ends here


// function clearCanvas(){

// 	canvasCtx.clearRect(0,0,100,100);
// }

// function drawCanvas(){
// 	// canvasCtx.fillStyle = '#333' ;
// 	// canvasCtx.fillRect(10,10,780,480);
	
// }



// $(document).ready(function(){
// 	initialiseCanvas();
// 	//canvasCtx = $("#gameCanvas").getContext('2d');
// 	var canvasCtx = $("#gameCanvas")[0].getContext('2d');
// 	alert(canvasCtx);
// });

// function initialiseCanvas(){
// 	$("#fitiedGameScreen").css('background-color', '#333333');
// 	$("#fitiedGameScreen").css('width', '60%');
// 	$("#fitiedGameScreen").css('height', '500px');
// 	$("#fitiedGameScreen").css('margin', '50px 20% auto');
// 	$("#fitiedGameScreen").css('padding', '50px auto');
// 	$("#fitiedGameScreen").html("<canvas id='gameCanvas' style='position:relative;background-color:#f1f1f1;width:90%;height:80%;margin:50px 5% auto;'></canvas>") ;
// }