var streamArray = require("stream-array");

module.exports = function(node, cb) {
	var source = JSON.parse("[" + (node.list || "") + "]");
	var stream = streamArray(source);
	cb(null, stream);
}
