var streamArray = require("stream-array");
module.exports = function(node, cb) {
	var value = node.value;
	try {
		var parsed = JSON.parse(value);
		parsed = value;
	} catch (e) {} // EH

	var stream = streamArray([value]);
	cb(null, stream);
}
