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
var barHeight = CLOUD_Y - GAP_TOP + TEXT_HEIGHT;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var playerIndex = 0;
  var playerName = 'Вы';

  var players = ['Вы', 'Джон', 'Арни', 'Стив']

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + FONT_GAP, GAP_TOP + TEXT_HEIGHT);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH, GAP_TOP, BAR_WIDTH, barHeight);

  var playerIndex = 1;
  var playerName = 'Джон';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + FONT_GAP + BAR_WIDTH * 2 /*230*/, GAP_TOP + TEXT_HEIGHT);
  ctx.fillStyle = 'hsl(235, 100%, 35%)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH * 2 + FONT_GAP, GAP_TOP, BAR_WIDTH, barHeight);

  var playerIndex = 2;
  var playerName = 'Арни';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + FONT_GAP * 2 + BAR_WIDTH * 3 /*320*/, GAP_TOP + TEXT_HEIGHT);
  ctx.fillStyle = 'hsl(235, 100%, 25%)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH * 3 + FONT_GAP * 2, GAP_TOP, BAR_WIDTH, barHeight);

  var playerIndex = 0;
  var playerName = 'Стив';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + FONT_GAP * 3 + BAR_WIDTH * 4 /*410*/, GAP_TOP + TEXT_HEIGHT);
  ctx.fillStyle = 'hsl(235, 100%, 55%)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH * 4 + FONT_GAP * 3, GAP_TOP, BAR_WIDTH, barHeight);
};

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
