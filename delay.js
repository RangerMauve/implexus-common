var delay = require("delay-stream");

module.exports = function(node, cb) {
	var time = parseInt(node.time) || 1000;
	cb(null, delay(time));
}
