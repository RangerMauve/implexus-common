var debounce = require("debounce-stream");

module.exports = function(node, cb) {
	var interval = parseInt(node.interval) || 1000;
	cb(null, debounce(interval));
}
