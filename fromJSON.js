var Parser = require('newline-json').Parser;

module.exports = function(node, cb) {
	cb(null, new Parser());
}
