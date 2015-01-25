var mergeStream = require("object-merge-stream");

module.exports = function(node, cb) {
	var state = JSON.parse(node.state || "{}");
	var depth = parseInt(node.depth);

	var options = {};
	if (!isNaN(depth)) options.depth = depth;

	cb(null, mergeStream(state, options));
}
