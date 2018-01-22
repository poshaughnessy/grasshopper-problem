var canvas = document.getElementById('canvas');

var btnStart = document.getElementById('start');
var btnStop = document.getElementById('stop');
var btnReset = document.getElementById('reset');

var PADDING = 10;
var HEADER_HEIGHT = 200;

var width = window.innerWidth - PADDING;
var height = window.innerHeight - PADDING - HEADER_HEIGHT;

var canvasSize = Math.min(width, height);

var maxJumpLength = 20;

console.log('canvasSize', canvasSize);

canvas.width = canvasSize;
canvas.height = canvasSize;

var context = canvas.getContext('2d');

var running = false;

// Transparent so we can see it darken more over time as grasshoppers land in the same position twice
context.fillStyle = "rgba(0, 0, 0, 0.1)";

function simulateGrasshopper() {

  if (!running) {
    return;
  }

  var landPosition = {x: Math.random() * canvasSize, y: Math.random() * canvasSize};
  var jumpVector = {x: maxJumpLength - (Math.random() * maxJumpLength * 2), y: maxJumpLength - (Math.random() * maxJumpLength * 2)};
  var jumpPosition = {x: landPosition.x + jumpVector.x, y: landPosition.y + jumpVector.y};

  // Darken the colour at this pixel
  context.fillRect(Math.round(jumpPosition.x), Math.round(jumpPosition.y), 2, 2);

  requestAnimationFrame(simulateGrasshopper);

}

btnStart.addEventListener('click', function() {

  running = true;

  simulateGrasshopper();

});

btnStop.addEventListener('click', function() {

  running = false;

});

btnReset.addEventListener('click', function() {

  running = false;

  context.clearRect(0, 0, canvasSize, canvasSize);

});