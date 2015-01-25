var stdout = require("stdout");
module.exports = function (node, cb) {
	var prefix = node.prefix || "";
	cb(null, stdout(prefix));
}
