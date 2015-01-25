var concat = require("array-concat-stream");

module.exports = function(node, cb) {
	var initial = JSON.parse(node.initial || "[]")
	cb(null, concat(initial));
}
