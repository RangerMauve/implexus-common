var makeProp = require("make-prop-stream");

module.exports = function(node, cb) {
	var prop = node.prop;

	if (!prop) return cb(new Error("Must specify prop attribute in makeProp node"), null);

	cb(null, makeProp(prop));
}
