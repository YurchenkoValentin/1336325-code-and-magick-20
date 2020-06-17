'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 210;
var CLOUD_X = 100;
var CLOUD_Y = 0;
var GAP = 10;
var GAP_TOP = 170;
var FONT_GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - (GAP * 3) - TEXT_HEIGHT;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, times) {
  var players = ['Вы', 'Джон', 'Арни', 'Стив'];
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var playerIndex = i;
    var playerName = players[playerIndex];
    var barX = CLOUD_X + BAR_WIDTH + (FONT_GAP + BAR_WIDTH) * playerIndex;
    var colorValue = Math.floor(Math.random() * 100);
    ctx.fillStyle = '#000';
    ctx.fillText(playerName, barX, GAP_TOP + TEXT_HEIGHT);
    if (playerName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(barX, CLOUD_Y + GAP, BAR_WIDTH, barHeight);
    } else {
      ctx.fillStyle = 'hsl(235, 100%, ' + colorValue + '%)';
      ctx.fillRect(barX, CLOUD_Y + GAP, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    }
  }
};

/*
  var playerIndex = 1;
  var playerName = players[playerIndex];


  ctx.fillText(playerName, CLOUD_X + BAR_WIDTH + (FONT_GAP + BAR_WIDTH) * playerIndex, GAP_TOP + TEXT_HEIGHT);
  ctx.fillStyle = 'hsl(235, 100%, 35%)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (FONT_GAP + BAR_WIDTH) * playerIndex, CLOUD_Y + GAP, BAR_WIDTH, barHeight);

  var playerIndex = 2;
  var playerName = players[playerIndex];


  ctx.fillText(playerName, CLOUD_X + BAR_WIDTH + (FONT_GAP + BAR_WIDTH) * playerIndex, GAP_TOP + TEXT_HEIGHT);
  ctx.fillStyle = 'hsl(235, 100%, 25%)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (FONT_GAP + BAR_WIDTH) * playerIndex, CLOUD_Y + GAP, BAR_WIDTH, barHeight);

  var playerIndex = 3;
  var playerName = players[playerIndex];

  ctx.fillText(playerName, CLOUD_X + BAR_WIDTH + (FONT_GAP + BAR_WIDTH) * playerIndex, GAP_TOP + TEXT_HEIGHT);
  ctx.fillStyle = 'hsl(235, 100%, 55%)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (FONT_GAP + BAR_WIDTH) * playerIndex, CLOUD_Y + GAP, BAR_WIDTH, barHeight);
};
 */
/* 'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TOP = 80;
var FONT_GAP = 15;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + GAP_TOP + (GAP + BAR_WIDTH) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_HEIGHT, CLOUD_Y + GAP_TOP + (GAP + BAR_WIDTH) * i, (barHeight * times[i]) / maxTime, BAR_WIDTH);
  }
}; */
