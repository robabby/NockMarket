'use strict';

var $ = require('jquery'),
	BinaryHeap = require('./BinaryHeap');

var BUY = "buys", 
	SELL = "sells";

function createBinaryHeap(orderType) {
	return new BinaryHeap(function(x) {
		return x;
	}, orderType);
}

function createExchange(exchangeData) {
	var cloned = $.extend(true, {}, exchangeData);
	cloned.trades = [];
}