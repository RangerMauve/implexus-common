var Stringifier = require('newline-json').Stringifier;

module.exports = function(node, cb) {
	cb(null, new Stringifier());
}
