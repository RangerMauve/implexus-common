var getProp = require("get-prop-stream");

module.exports = function(node, cb) {
	var prop = node.prop;
	if (!prop) return cb(new Error("Must specify prop attribute in getProp node"), null);

	cb(null, getProp(prop));
}
