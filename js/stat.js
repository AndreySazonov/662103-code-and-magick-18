'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP = 10;
var BAR_GAP = 50;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_X = 140;
var BAR_Y = 240;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getTextMessage = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  getTextMessage(ctx, 'Ура вы победитель!', 120, 40, '#000');
  getTextMessage(ctx, 'Список результатов:', 120, 60, '#000');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    getTextMessage(ctx, names[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP, '#000');
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    getTextMessage(ctx, Math.round(times[i]), BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP * 4 - (BAR_HEIGHT * times[i]) / maxTime, '#000');
  }
};
