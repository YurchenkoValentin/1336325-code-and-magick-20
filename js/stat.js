'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 0;
var GAP = 10;
var GAP_TOP = 230;
var FONT_GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - (GAP + TEXT_HEIGHT * 5) - TEXT_HEIGHT;

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

window.renderStatistics = function (ctx, players, times) {
  var players = ['Вы', 'Джон', 'Арни', 'Стив'];
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, TEXT_HEIGHT * 2);

  for (var i = 0; i < players.length; i++) {
    var playerIndex = i;
    var playerName = players[playerIndex];
    var barX = CLOUD_X + BAR_WIDTH + (FONT_GAP + BAR_WIDTH) * playerIndex;
    var playerY = GAP_TOP + TEXT_HEIGHT;
    var barY = playerY - TEXT_HEIGHT;
    var scoreY = (-barHeight * times[i]) / maxTime;

    var colorValue = Math.floor(Math.random() * 100);

    ctx.fillStyle = '#000';
    ctx.fillText(playerName, barX, playerY);
    if (playerName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(barX, CLOUD_Y + GAP_TOP, BAR_WIDTH, (-barHeight * times[i]) / maxTime);
    } else {
      ctx.fillStyle = 'hsl(235, 100%, ' + colorValue + '%)';
      ctx.fillRect(barX, CLOUD_Y + GAP_TOP, BAR_WIDTH, (-barHeight * times[i]) / maxTime);
    }

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), barX, scoreY + GAP * 21);

    //var time = [1.1313, 5.133113, 7.31313, 6.31313, 8.313131, 10.311331];
    //console.log(Math.round(time[3]));

    /* for (var j = 0; j < times.length; j++) {
      var timesIndex = j;
      var playerTime = times[timesIndex];
      var result = Math.round(playerTime);
      ctx.fillStyle = '#000';
      ctx.fillText(result, barX, scoreY);
    } */
  }
};
